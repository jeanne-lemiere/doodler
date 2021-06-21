import React, {
  useLayoutEffect, useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import colorOptions from 'src/data/colorOptions';
import thicknessOptions from 'src/data/thicknessOptions';
import './styles.scss';

const Canvas = ({
  selectedColor,
  selectedThickness,
  isDrawing,
  setIsDrawing,
  clearCanvas,
  setClearCanvas,
  width,
  height,
  resizeCanvas,
}) => {
  // here we compare the color and thickness values received from the state
  // to the existing arrays of options, so we can access the exact HEX or px value
  // to configure our canvas with the user's preferences
  const currentColor = selectedColor === 'white'
    ? { value: 'white', hexValue: '#ffffff' }
    : colorOptions.find((element) => element.value === selectedColor);

  const currentThickness = thicknessOptions.find((element) => element.value === selectedThickness);

  // little coquetry here, the cursor changes when the eraser is selected
  // rather than the painting tool
  const canvasClass = selectedColor === 'white'
    ? 'drawing-canvas drawing-canvas--eraser'
    : 'drawing-canvas';

  // here we create refs to keep track of the canvas and its context
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  // the first useLayoutEffect configures the canvas height and width (dynamically)
  // and sets the context
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.lineCap = 'round';
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    contextRef.current = context;

    const handleResize = () => {
      resizeCanvas(window.innerHeight, window.innerWidth);
    };

    // we listen to resize event
    window.addEventListener('resize', handleResize);

    // and clean up after ourselves
    return () => window.removeEventListener('resize', handleResize);
  }, [width, height]);

  // the second hook here updates the canvas settings
  // as color and thickness values change
  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.strokeStyle = currentColor.hexValue;
    context.lineWidth = currentThickness.width;

    // it also clears the canvas whenever the user presses the X button in Header
    if (clearCanvas) {
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      setClearCanvas(false);
    }
  }, [selectedThickness, selectedColor, clearCanvas]);

  const startDrawing = ({ nativeEvent }) => {
    // the function only responds to left click
    if (nativeEvent.button !== 0) {
      return;
    }

    // here we keep track of the mouse's coordonates and begin a new path
    // this is the simplest and most readable way to do it
    // but I find the stroke quite laggy and would like to make it smoother
    // (need to do some more research on this first)
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const stopDrawing = ({ nativeEvent }) => {
    if (nativeEvent.button !== 0) {
      return;
    }
    // on mouseUp the path is closed
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    // those two lines actually create the visible stroke
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
      ref={canvasRef}
      className={canvasClass}
    />
  );
};

Canvas.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  selectedThickness: PropTypes.string.isRequired,
  isDrawing: PropTypes.bool.isRequired,
  setIsDrawing: PropTypes.func.isRequired,
  clearCanvas: PropTypes.bool.isRequired,
  setClearCanvas: PropTypes.func.isRequired,
};

export default Canvas;

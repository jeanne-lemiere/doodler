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

  // the first useLayoutEffect configures the canvas height and width
  // and sets the context
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    // the alpha property indicates there won't be any transparent pixel in the canvas
    // therefore it enhances drawing performances
    const context = canvas.getContext('2d', { alpha: false });
    context.scale(2, 2);
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    contextRef.current = context;
  }, []);

  // the second hook here updates the context settings
  // as color and thickness values change
  useEffect(() => {
    const context = canvasRef.current.getContext('2d', { alpha: false });
    context.strokeStyle = currentColor.hexValue;
    context.lineWidth = currentThickness.width;

    // it also clears the canvas whenever the user presses the X button in Header
    if (clearCanvas) {
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      setClearCanvas(false);
    }
  }, [selectedThickness, selectedColor, clearCanvas]);

  /*  useEffect(() => {
    const handleResize = () => {
      // updates viewport height and width in the state
      resizeCanvas(window.innerHeight, window.innerWidth);
      // updates the canvas height and width
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      // here find a way to redraw the canvas after resize
    };
    // trigger the function on resize
    window.onresize = handleResize;

    // and clean up after ourselves
    return () => window.removeEventListener('resize', handleResize);
  }, [height, width]); */

  const startDrawing = ({ nativeEvent }) => {
    // when using a mouse, drawing action only responds to left click
    if (nativeEvent.button && nativeEvent.button !== 0) {
      return;
    }
    setIsDrawing(true);
    contextRef.current.beginPath();

    const coordonates = nativeEvent.touches
      ? { x: nativeEvent.touches[0].clientX, y: nativeEvent.touches[0].clientY }
      : { x: nativeEvent.clientX, y: nativeEvent.clientY };

    contextRef.current.moveTo(coordonates.x, coordonates.y);
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
    const coordonates = nativeEvent.touches
      ? { x: nativeEvent.touches[0].clientX, y: nativeEvent.touches[0].clientY }
      : { x: nativeEvent.clientX, y: nativeEvent.clientY };

    contextRef.current.lineTo(coordonates.x, coordonates.y);
    contextRef.current.stroke();
  };

  return (
    <canvas
      // mouse events
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
      onMouseOut={stopDrawing}
      // touch events
      onTouchStart={startDrawing}
      onTouchEnd={stopDrawing}
      onTouchMove={draw}
      // refs
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
  resizeCanvas: PropTypes.func.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

Canvas.defaultProps = {
  height: window.innerHeight,
  width: window.innerWidth,
};

export default Canvas;

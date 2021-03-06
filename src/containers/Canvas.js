import { connect } from 'react-redux';
import Canvas from 'src/components/Canvas';
import { setIsDrawing, setClearCanvas, resizeCanvas } from '../actions';

const mapState = (state) => {
  const {
    color, thickness, isDrawing, clearCanvas,
  } = state;

  const {
    height, width,
  } = state.viewport;

  return {
    selectedColor: color,
    selectedThickness: thickness,
    isDrawing,
    clearCanvas,
    height,
    width,
  };
};

const mapDispatch = (dispatch) => ({
  setIsDrawing: (bool) => {
    const action = setIsDrawing(bool);
    dispatch(action);
  },
  setClearCanvas: (bool) => {
    const action = setClearCanvas(bool);
    dispatch(action);
  },
  resizeCanvas: (height, width) => {
    const viewport = { height, width };
    const action = resizeCanvas(viewport);
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(Canvas);

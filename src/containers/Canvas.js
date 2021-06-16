import { connect } from 'react-redux';
import Canvas from 'src/components/Canvas';
import { setIsDrawing, setClearCanvas } from '../actions';

const mapState = (state) => {
  const {
    color, thickness, isDrawing, clearCanvas,
  } = state;

  return {
    selectedColor: color,
    selectedThickness: thickness,
    isDrawing,
    clearCanvas,
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
});

export default connect(mapState, mapDispatch)(Canvas);

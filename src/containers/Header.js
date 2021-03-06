import { connect } from 'react-redux';
import Header from 'src/components/Header';
import {
  colorChange, thicknessChange, setClearCanvas, setToolbar,
} from 'src/actions';

const mapState = (state) => {
  const {
    color, thickness,
  } = state;

  return {
    selectedColor: color,
    selectedThickness: thickness,
  };
};

const mapDispatch = (dispatch) => ({
  updateColor: (value, name) => {
    // here I collect the picked color from radio inputs and turn it into a JS object
    // then can I can easily change the values contained in the state
    const data = { [name]: value };
    const action = colorChange(data);
    dispatch(action);
  },
  updateThickness: (value, name) => {
    // here I collect the picked color from radio inputs and turn it into a JS object
    // then can I can easily change the values contained in the state
    const data = { [name]: value };
    const action = thicknessChange(data);
    dispatch(action);
  },
  setClearCanvas: (bool) => {
    const action = setClearCanvas(bool);
    dispatch(action);
  },
  setToolbar: (bool) => {
    const action = setToolbar(bool);
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(Header);

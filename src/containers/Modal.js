import { connect } from 'react-redux';
import Modal from 'src/components/Modal';
import { setToolbar, colorChange, thicknessChange } from 'src/actions';

const mapState = (state) => {
  const {
    toolbar,
    selectedColor,
    selectedThickness,

  } = state;

  return {
    isOpen: toolbar,
    selectedColor,
    selectedThickness,
  };
};

const mapDispatch = (dispatch) => ({
  toggle: (bool) => {
    // here we set modal toolbar display to true or false
    const action = setToolbar(bool);
    dispatch(action);
  },
  updateColor: (value, name) => {
    const data = { [name]: value };
    const action = colorChange(data);
    dispatch(action);
  },
  updateThickness: (value, name) => {
    const data = { [name]: value };
    const action = thicknessChange(data);
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(Modal);

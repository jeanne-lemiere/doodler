import { connect } from 'react-redux';
import ColorToolbar from 'src/components/ColorToolbar';
import { colorChange } from 'src/actions';

const mapState = (state) => {
  const {
    color,
  } = state;

  return {
    selectedColor: color,
  };
};

const mapDispatch = (dispatch) => ({
  updateColor: (value, name) => {
    const data = { [name]: value };
    const action = colorChange(data);
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(ColorToolbar);

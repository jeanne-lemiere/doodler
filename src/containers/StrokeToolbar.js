import { connect } from 'react-redux';
import { thicknessChange } from 'src/actions';
import StrokeToolbar from '../components/StrokeToolbar';

const mapState = (state) => {
  const {
    thickness,
  } = state;

  return {
    selectedThickness: thickness,
  };
};

const mapDispatch = (dispatch) => ({
  updateThickness: (value, name) => {
    const data = { [name]: value };
    const action = thicknessChange(data);
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(StrokeToolbar);

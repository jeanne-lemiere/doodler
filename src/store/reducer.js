import {
  COLOR_CHANGE,
  THICKNESS_CHANGE,
} from '../actions';

const initialState = {
  color: '',
  thickness: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case COLOR_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    case THICKNESS_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

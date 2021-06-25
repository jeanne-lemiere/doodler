import {
  COLOR_CHANGE,
  THICKNESS_CHANGE,
  SET_IS_DRAWING,
  SET_CLEAR_CANVAS,
  RESIZE_CANVAS,
  SET_TOOLBAR,
} from '../actions';

const initialState = {
  color: 'black',
  thickness: 'very-thin',
  isDrawing: false,
  canvas: {},
  clearCanvas: false,
  viewport: {},
  toolbar: false,
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
    case SET_IS_DRAWING:
      return {
        ...state,
        isDrawing: action.payload,
      };
    case SET_CLEAR_CANVAS:
      return {
        ...state,
        clearCanvas: action.payload,
      };
    case RESIZE_CANVAS:
      return {
        ...state,
        viewport: action.payload,
      };
    case SET_TOOLBAR:
      return {
        ...state,
        toolbar: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

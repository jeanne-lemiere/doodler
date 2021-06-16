export const COLOR_CHANGE = 'COLOR_CHANGE';
export const THICKNESS_CHANGE = 'THICKNESS_CHANGE';
export const SET_IS_DRAWING = 'SET_IS_DRAWING';
export const SET_CLEAR_CANVAS = 'SET_CLEAR_CANVAS';

export const colorChange = (payload) => ({
  type: COLOR_CHANGE,
  payload,
});

export const thicknessChange = (payload) => ({
  type: THICKNESS_CHANGE,
  payload,
});

export const setIsDrawing = (payload) => ({
  type: SET_IS_DRAWING,
  payload,
});

export const setClearCanvas = (payload) => ({
  type: SET_CLEAR_CANVAS,
  payload,
});

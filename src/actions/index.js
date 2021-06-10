export const COLOR_CHANGE = 'COLOR_CHANGE';
export const THICKNESS_CHANGE = 'THICKNESS_CHANGE';

export const colorChange = (payload) => ({
  type: COLOR_CHANGE,
  payload,
});

export const thicknessChange = (payload) => ({
  type: THICKNESS_CHANGE,
  payload,
});

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import thicknessOptions from '../../data/thicknessOptions';
import Radio from '../Radio';

const StrokeToolbar = ({
  selectedThickness,
  updateThickness,
}) => (
  <>
    {thicknessOptions.map((choice) => (
      <Radio
        selectedthickness={selectedThickness}
        label={choice.text}
        type="radio"
        name="thickness"
        value={choice.value}
        key={choice.value}
        checked={selectedThickness === choice.value}
        onChange={updateThickness}
      />
    ))}
  </>
);

StrokeToolbar.propTypes = {
  selectedThickness: PropTypes.string.isRequired,
  updateThickness: PropTypes.func.isRequired,
};

export default StrokeToolbar;

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Radio from '../Radio';
import colorOptions from '../../data/colorOptions';

const ColorToolbar = ({
  selectedColor,
  updateColor,
}) => (
  <>
    {colorOptions.map((choice) => (
      <Radio
          // important to give selected value in prop
          // so we can dynamically give the right radio button the checked property
        selectedcolor={selectedColor}
        label={choice.text}
        type="radio"
        name="color"
        value={choice.value}
        key={choice.value}
          // checks if this particular options' value === the value that was sent to the state
        checked={selectedColor === choice.value}
        onChange={updateColor}
      />
    ))}
  </>
);

ColorToolbar.propTypes = {
  updateColor: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
};

export default ColorToolbar;

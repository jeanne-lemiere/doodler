import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Radio = (props) => {
  const isSelected = props.checked ? `radio radio--${props.value} radio--selected` : `radio radio--${props.value}`;

  return (
    <div className={isSelected}>
      <input
        {...props}
        id={props.label} // so the input can be selected by clicking on the label
        type="radio"
        className="radio__button"
        onChange={(evt) => {
          props.onChange(evt.target.value, props.name);
        }}
      />
      <label
        className="radio__label"
        htmlFor={props.label}
      >{props.label}
      </label>
    </div>

  );
};

Radio.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};
export default Radio;

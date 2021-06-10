import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import PropTypes from 'prop-types';
import eraser from 'src/assets/eraser.png';
import title from '../../assets/doodler.png';
import Radio from '../Radio';
import styles from './styles.scss';

const Header = ({
  updateColor,
  updateThickness,
  selectedColor,
  selectedThickness,
  clearCanvas,
}) => {
  const colorOptions = [
    { text: 'Noir', value: 'black' },
    { text: 'Violet', value: 'purple' },
    { text: 'Bleu', value: 'blue' },
    { text: 'Vert', value: 'green' },
    { text: 'Jaune', value: 'yellow' },
    { text: 'Orange', value: 'orange' },
    { text: 'Rouge', value: 'red' },
  ];

  const thicknessOptions = [
    { text: 'Très fin', value: 'very-thin' },
    { text: 'Fin', value: 'thin' },
    { text: 'Moyen', value: 'average' },
    { text: 'Gros', value: 'thick' },
    { text: 'Très gros', value: 'very-thick' },
  ];

  const erase = () => {
    const name = 'color';
    const value = 'white';
    updateColor(value, name);
  };

  return (
    <header className="header">
      <img
        className="header__title"
        alt="Doodler"
        src={title}
      />
      <div className="header__toolbar">
        <section className="toolbar__palette">
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
        </section>
        <section className="toolbar__stroke">
          {thicknessOptions.map((choice) => (
            <Radio
              // important to give selected value in prop
              // so we can dynamically give the right radio button the checked property
              selectedthickness={selectedThickness}
              label={choice.text}
              type="radio"
              name="thickness"
              value={choice.value}
              key={choice.value}
              // checks if this particular options' value === the value that was sent to the state
              checked={selectedThickness === choice.value}
              onChange={updateThickness}
            />
          ))}
        </section>
        <section className="toolbar__erase">
          <button
            type="button"
            className="erase__button"
            onClick={erase}
          >
            <img
              className="erase__icon"
              src={eraser}
              alt="gomme"
            />
          </button>
        </section>
        <section className="toolbar__clear">
          <button
            type="button"
            className="clear__button"
            onClick={clearCanvas}
          >
            <RiDeleteBin5Line className="clear__icon" />
          </button>
        </section>
      </div>
    </header>
  );
};

Header.propTypes = {
  updateColor: PropTypes.func.isRequired,
  updateThickness: PropTypes.func.isRequired,
  clearCanvas: PropTypes.func.isRequired,
  selectedColor: PropTypes.string,
  selectedThickness: PropTypes.string,
};

Header.defaultProps = {
  selectedColor: 'black',
  selectedThickness: 'average',
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import eraser from 'src/assets/eraser.png';
import deleteIcon from 'src/assets/delete.png';
import colorOptions from 'src/data/colorOptions';
import thicknessOptions from 'src/data/thicknessOptions';
import title from '../../assets/doodler.png';
import Radio from '../Radio';
import './styles.scss';

const Header = ({
  updateColor,
  updateThickness,
  selectedColor,
  selectedThickness,
  setClearCanvas,
}) => {
  // when clicking on the eraser picture
  // the selectedColor is set to white
  // (canvas background has been set to white as well)
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
        <section
          className="toolbar__palette"
        >
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
            onClick={() => {
              setClearCanvas(true);
            }}
          >
            <img
              className="clear__icon"
              src={deleteIcon}
              alt="supprimer"
            />
          </button>
        </section>
      </div>
    </header>
  );
};

Header.propTypes = {
  updateColor: PropTypes.func.isRequired,
  updateThickness: PropTypes.func.isRequired,
  setClearCanvas: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
  selectedThickness: PropTypes.string.isRequired,
};

export default Header;

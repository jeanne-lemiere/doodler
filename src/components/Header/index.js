// import: NPM
import React from 'react';
import PropTypes from 'prop-types';

// import: icons and images
import eraser from 'src/assets/eraser.png';
import deleteIcon from 'src/assets/delete.png';
import title from '../../assets/doodler.png';
import titleMobile from '../../assets/doodler-mobile.png';
import toolbar from '../../assets/palette.png';

// import: other components & stylesheet
import Modal from '../../containers/Modal';
import ColorToolbar from '../../containers/ColorToolbar';
import StrokeToolbar from '../../containers/StrokeToolbar';
import './styles.scss';

const Header = ({
  updateColor,
  setClearCanvas,
  setToolbar,
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
    <div>
      <header className="header">
        <img
          className="header__title"
          alt="Doodler"
          src={title}
        />
        <img
          className="header__title--mobile"
          alt="Doodler"
          src={titleMobile}
        />
        <div className="header__toolbar">
          <section className="toolbar__mobile-toolbar">
            <button
              type="button"
              className="mobile-toolbar__button"
              onClick={() => {
                setToolbar(true);
              }}
            >
              <img
                className="mobile-toolbar__icon"
                alt="toolbar"
                src={toolbar}
              />
            </button>
          </section>
          <section
            className="toolbar__palette"
          >
            <ColorToolbar />
          </section>
          <section className="toolbar__stroke">
            <StrokeToolbar />
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
      <Modal />
    </div>
  );
};

Header.propTypes = {
  updateColor: PropTypes.func.isRequired,
  setClearCanvas: PropTypes.func.isRequired,
  setToolbar: PropTypes.func.isRequired,
};

export default Header;

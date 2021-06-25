import React from 'react';
import PropTypes from 'prop-types';
import ColorToolbar from '../../containers/ColorToolbar';
import StrokeToolbar from '../../containers/StrokeToolbar';
import './styles.scss';

const Modal = ({
  isOpen,
  toggle,
}) => {
  const modalClass = isOpen ? 'modal' : 'modal modal--is-hidden';

  return (
    <div className={modalClass}>
      <div className="modal__card">
        <section
          className="modal__palette"
        >
          <ColorToolbar />
        </section>
        <section className="modal__stroke">
          <StrokeToolbar />
        </section>
        <section className="modal__close">
          <button
            type="button"
            className="close-button"
            onClick={() => {
              toggle(false);
            }}
          >OK
          </button>
        </section>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Modal;

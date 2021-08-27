import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './customButton.scss';

const CustomButton = ({ isOpen, manageClick }) => {
  const cssClass = classNames('custom__button', { 'custom__button--closed': isOpen });
  // console.log({ isOpen });
  return (
    <button
      type="button"
      className={cssClass}
      onClick={manageClick}
    >
      +
    </button>
  );
};

CustomButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  manageClick: PropTypes.func.isRequired,
};

export default CustomButton;

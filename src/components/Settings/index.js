import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CustomButton from 'src/containers/Settings/CustomButton';

import './settings.scss';

const Settings = ({ isOpen }) => {
  const cssClass = classNames('settings-wrapper', { 'settings-wrapper--closed': isOpen === false });

  return (
    <div className={cssClass}>
      <CustomButton />
      {isOpen && (
        <form className="settings">
          <input
            type="email"
            className="settings__email"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="settings__password"
            placeholder="Mot de passe"
            required
          />
          <button type="submit" className="settings__submit">
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
};

Settings.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Settings;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CustomButton from 'src/containers/Settings/CustomButton';

import './settings.scss';

const Settings = ({ isOpen, emailValue, passwordValue, setEmailValue, setPasswordValue }) => {
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
            value={emailValue}
            onChange={(event) => {
              setEmailValue(event.target.value);
            }}
            required
          />
          <input
            type="password"
            className="settings__password"
            placeholder="Mot de passe"
            value={passwordValue}
            onChange={(event) => {
              setPasswordValue(event.target.value);
            }}
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
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  // parameter: new emailValue and new passwordValue
  setEmailValue: PropTypes.func.isRequired,
  setPasswordValue: PropTypes.func.isRequired,
};

export default Settings;

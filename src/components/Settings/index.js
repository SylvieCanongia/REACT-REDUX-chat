import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CustomButton from 'src/containers/Settings/CustomButton';
import Field from 'src/components/Field';

import './settings.scss';

const Settings = ({
  isOpen,
  emailValue,
  passwordValue,
  setEmailValue,
  setPasswordValue,
}) => {
  const cssClass = classNames('settings-wrapper', { 'settings-wrapper--closed': isOpen === false });

  return (
    <div className={cssClass}>
      <CustomButton />
      {isOpen && (
        <form className="settings">
          <Field
            className="settings__email"
            identifier="email"
            placeholder="happybirthday@gmail.com"
            label="Votre adresse email :"
            value={emailValue}
            changeField={(identifier, newValue) => {
              console.log(`identifier: ${identifier}, newValue: ${newValue}`);
            }}
          />
          <Field
            className="settings__password"
            identifier="password"
            placeholder=""
            label="Votre mot de passe"
            value={passwordValue}
            changeField={(identifier, newValue) => {
              console.log(`identifier: ${identifier}, newValue: ${newValue}`);
            }}
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

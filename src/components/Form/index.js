import React from 'react';
import PropTypes from 'prop-types';

import { Send } from 'react-feather';
import './form.scss';

const Form = ({ value, setValue, manageSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form__message"
        placeholder="Saisissez votre message"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button type="submit" className="form__submit">
        <Send className="form__submit__icon" />
      </button>
    </form>
  );
};

Form.propTypes = {
  value: PropTypes.string.isRequired,
  // parameter: new value
  setValue: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
};

export default Form;

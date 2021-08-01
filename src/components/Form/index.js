import React from 'react';
import PropTypes from 'prop-types';

import { Send } from 'react-feather';
import './form.scss';

const Form = ({ value }) => (
  <form className="form">
    <input
      type="text"
      className="form__message"
      placeholder="Entrez votre message"
      value={value}
    />
    <button type="submit" className="form__submit">
      <Send />
    </button>
  </form>
);

Form.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Form;

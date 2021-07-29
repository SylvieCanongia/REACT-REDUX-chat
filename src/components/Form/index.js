import React from 'react';

import { Send } from 'react-feather';
import './form.scss';

const Form = () => (
  <form className="form">
    <input type="text" className="form__message" placeholder="Entrez votre message" />
    <button type="submit" className="form__submit">
      <Send />
    </button>
  </form>
);

export default Form;

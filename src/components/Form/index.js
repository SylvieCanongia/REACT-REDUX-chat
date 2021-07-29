import React from 'react';

import './form.scss';

const Form = () => (
  <form className="form">
    <input type="text" className="form__message" placeholder="Entrez votre message" />
    <input type="submit" className="form__submit" value=">" />
  </form>
);

export default Form;

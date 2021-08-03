import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import './message.scss';

const Message = ({ username, content, pseudo }) => {
  const cssClass = classNames('message', { 'message--other': pseudo !== username });

  return (
    <section className={cssClass}>
      <div className="message__author">{username}</div>
      <div className="message__content arrow-up">{content}</div>
    </section>
  );
};

Message.propTypes = {
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  // current user pseudo
  pseudo: PropTypes.string.isRequired,
};

export default Message;
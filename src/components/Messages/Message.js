import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import './message.scss';

const Message = ({ username, content, isOwn }) => {
  const cssClass = classNames('message', { 'message--other': isOwn });

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
  isOwn: PropTypes.bool.isRequired,
};

export default Message;

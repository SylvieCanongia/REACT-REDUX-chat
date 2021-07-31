import React from 'react';

import PropTypes from 'prop-types';

import './message.scss';

const Message = ({ username, content }) => (
  <section className="message">
    <div className="message__author">{username}</div>
    <div className="message__content">{content}</div>
  </section>
);

Message.propTypes = {
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;

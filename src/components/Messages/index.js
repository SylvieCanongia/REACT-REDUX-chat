import React from 'react';
import PropTypes from 'prop-types';

import Message from 'src/containers/Messages/Message';

import './messages.scss';

const Messages = ({ messages }) => (
  <section className="messages">
    {messages.map((message) => (
      <Message key={message.id} {...message} />
    ))}
  </section>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Messages;

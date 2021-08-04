import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Message from 'src/containers/Messages/Message';

import './messages.scss';

const Messages = ({ messages }) => {
  const refMessagesContainer = useRef(null);

  // apply an effect each time 'messages' value changes
  useEffect(() => {
    // console.log('useEffect');
    // scroll to the bottom of messages container
    // console.log(refMessagesContainer.current.scrollHeight);

    refMessagesContainer.current.scrollTo({
      top: refMessagesContainer.current.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <section className="messages" ref={refMessagesContainer}>
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </section>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Messages;

// == Import npm
import React from 'react';

import messages from 'src/data/messages';

import Form from 'src/components/Form';
import Messages from 'src/components/Messages';

// == Import
import './styles.scss';

// == Composant
const Chatroom = () => (
  <div className="chatroom">
    <Messages />
    <Form />
  </div>
);

// == Export
export default Chatroom;

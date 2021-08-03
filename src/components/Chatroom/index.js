// == Import npm
import React from 'react';

import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';

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

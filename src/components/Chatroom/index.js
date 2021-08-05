// == Import npm
import React from 'react';

import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';
import Settings from 'src/containers/Settings';

// == Import
import './styles.scss';

// == Composant
const Chatroom = () => (
  <div className="chatroom">
    <Settings />
    <Messages />
    <Form />
  </div>
);

// == Export
export default Chatroom;

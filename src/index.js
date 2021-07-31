// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'src/store';

// == Import : local
// Components
import Chatroom from 'src/components/Chatroom';

// == Render
const rootReactElement = (
  <Provider store={store}>
    <Chatroom />
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);

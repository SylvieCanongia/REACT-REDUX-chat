import {
  SET_INPUT_VALUE,
  ADD_MESSAGE,
  HANDLE_CLICK,
  SET_NEW_EMAIL_VALUE,
  SET_NEW_PASSWORD_VALUE,
} from 'src/actions/chatActions';

import { getHighestId } from 'src/utils';

const initialState = {
  messages: [
    {
      id: 1,
      username: 'Mario',
      content: 'Coucou !',
    },
    {
      id: 2,
      username: 'Luidgi',
      content: 'Hello !',
    },
  ],
  // input content for entering a message
  inputMessage: '',
  pseudo: 'Mario',
  isOpen: true,
  email: '',
  password: '',
};

function chatReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputMessage: action.value,
      };

      // braces here are to limit the scope to this case only
    case ADD_MESSAGE: {
      // console.log(`On va ajouter le message ${state.inputMessage}`);

      const message = {
        id: getHighestId(state.messages) + 1,
        username: state.pseudo,
        content: state.inputMessage,
      };

      return {
        ...state,
        // create a new array and dump each element of state.messages + add the new message
        messages: [...state.messages, message],
        // clears the field
        inputMessage: '',
      };
    }

    case HANDLE_CLICK:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case SET_NEW_EMAIL_VALUE:
      return {
        ...state,
        email: action.value,
      };

    case SET_NEW_PASSWORD_VALUE:
      return {
        ...state,
        password: action.value,
      };

    default:
      return state;
  }
}

export default chatReducer;

import { SET_INPUT_VALUE, ADD_MESSAGE } from 'src/actions/chatActions';

import { getHighestId } from 'src/utils';

const initialState = {
  messages: [],
  // input content for entering a message
  inputMessage: '',
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
        username: 'Super Chat',
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

    default:
      return state;
  }
}

export default chatReducer;

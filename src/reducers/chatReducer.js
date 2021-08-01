const initialState = {
  messages: [
    {
      id: 1,
      username: 'Mario',
      content: 'Hello ! T\'as pas vu Princesse Peach ?',
    },
    {
      id: 2,
      username: 'Luidgi',
      content: 'Non désolé...',
    },
    {
      id: 3,
      username: 'Mario',
      content: 'Je crois qu\'elle a été enlevée par Bowser !',
    },
    {
      id: 4,
      username: 'Luidgi',
      content: 'Ah mince ! Nous devons aller la délivrer !',
    },
  ],
  // input content for entering a message
  inputMessage: '',
};

function chatReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default chatReducer;

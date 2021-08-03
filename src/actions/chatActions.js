// === action types
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const ADD_MESSAGE = 'ADD_MESSAGE';

// === action creators
export const setInputValue = (value) => ({
  type: SET_INPUT_VALUE,
  value,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

// === action types
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const HANDLE_CLICK = 'HANDLE_CLICK';

// === action creators
export const setInputValue = (value) => ({
  type: SET_INPUT_VALUE,
  value,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const handleClick = () => ({
  type: HANDLE_CLICK,
});

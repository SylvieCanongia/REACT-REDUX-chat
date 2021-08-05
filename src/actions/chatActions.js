// === action types
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const HANDLE_CLICK = 'HANDLE_CLICK';
export const SET_NEW_EMAIL_VALUE = 'SET_NEW_EMAIL_VALUE';
export const SET_NEW_PASSWORD_VALUE = 'SET_NEW_PASSWORD_VALUE';

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

export const setNewEmailValue = (value) => ({
  type: SET_NEW_EMAIL_VALUE,
  value,
});

export const setNewPasswordValue = (value) => ({
  type: SET_NEW_PASSWORD_VALUE,
  value,
});

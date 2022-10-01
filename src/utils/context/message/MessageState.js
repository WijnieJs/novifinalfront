import React, { useReducer } from 'react';

import MessageContext from './messageContext';
import messageReducer from './messageReducer';
import { SET_MESSAGE, REMOVE_MESSAGE } from '../types';
function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}
const MessageState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setMessage = (msg, type, timeout = 5000) => {
    const id = makeid(22);
    dispatch({
      type: SET_MESSAGE,
      payload: { msg, type, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_MESSAGE, payload: id }), timeout);
  };

  return (
    <MessageContext.Provider
      value={{
        messages: state,
        setMessage,
      }}>
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageState;

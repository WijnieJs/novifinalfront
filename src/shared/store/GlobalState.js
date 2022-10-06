import React, { createContext, useReducer } from 'react';
import AppReducer from './Reducer';

// Initial state
const initialState = {
  user: {}
}
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteFavorite(id) {
    dispatch({
      type: 'DELETE_FAVORITE',
      payload: id
    });
  }

  function setUser(user) {
    dispatch({
      type: 'SET_USER',
      payload: user
    });
  }

  return (<GlobalContext.Provider value={{
    user: state.user,
    deleteFavorite,
    setUser
  }}>
    {children}
  </GlobalContext.Provider>);

}
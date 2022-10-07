import React, { createContext, useReducer } from 'react';
import AppReducer from './Reducer';

// Initial state
const initialState = {
   favorites: [],
   totalAmount: 0
};
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

   function addFavorite(transaction) {
      dispatch({
         type: 'ADD_FAVORITE',
         payload: transaction
      });
   }

   return (
      <GlobalContext.Provider
         value={{
            favorites: state.favorites,
            deleteFavorite,
            addFavorite
         }}
      >
         {children}
      </GlobalContext.Provider>
   );
};

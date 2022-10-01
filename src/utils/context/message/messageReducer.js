import { SET_MESSAGE, REMOVE_MESSAGE } from '../types';

const messageReducer = (state, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return [...state, action.payload];
    case REMOVE_MESSAGE:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};

export default messageReducer;

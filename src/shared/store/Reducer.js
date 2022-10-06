export default (state, action) => {
  switch (action.type) {
    case 'LOGOUT_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}
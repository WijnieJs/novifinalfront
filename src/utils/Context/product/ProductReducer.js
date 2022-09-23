const productReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'ADD_PRODUCT':
      return {
        ...state,
        loading: false,
      }
    case 'CLEAR_PRODUCTS':
      return {
        ...state,
        products: [],
      }

    default:
      return state
  }
}

export default productReducer

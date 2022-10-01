import {
  INIT_PRODUCTS,
  PRODUCTS_FAIL,
  PRODUCTS,
  GET_PRODUCTS,
  PRODUCT_ERROR,
  REMOVE_PRODUCT,
  ADD_PRODUCT
} from '../types';



const productReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoading: false
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      };
    case ADD_PRODUCT:
      return [...state, { title: action.title, body: action.body }]
    case REMOVE_PRODUCT:
      return state.filter((note) => note.title !== action.title)
    default:
      throw new Error(`Unsupported type of: ${action.type}`);

  }
}


export default productReducer;

import React, { useReducer, useContext, useEffect } from 'react';

import ProductContext from "./productContext";
import productReducer from "./productReducer"
import axios from 'axios'


import {
  INIT_PRODUCTS,
  PRODUCTS_FAIL,
  GET_PRODUCTS,
  PRODUCTS,
  PRODUCT_ERROR,
  REMOVE_PRODUCT,
  ADD_PRODUCT
} from '../types';



const BASE_URL = new URL('http://localhost:8080/api/public/')


let placeholderTitle = 'Pokemon'
let placeHolderTag = 'Books'
let placeHolderId = 2

const GET_ALL_PRODUCTS = new URL("allProductsInShop", BASE_URL)
const GET_BY_TITLE = new URL(`getByTitle/${placeholderTitle}`, BASE_URL)
const GET_BY_TAG = new URL(`getByTagz/${placeHolderTag}`, BASE_URL)
const GET_BY_ID = new URL(`productByIdz/${placeHolderId}`, BASE_URL)


export const useProducts = () => {
  const { state, dispatch } = useContext(ProductContext);
  return [state, dispatch];
};



export const getProducts = async (dispatch) => {

  try {
    const res = await axios.get(GET_BY_TAG);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    let message = ""



    if (err)
      console.log(err.response.status)
    switch (err.response.status) {
      case 500:
        console.log('Internal Server Error.');
        break;
      case 400:
        console.log(err.response.data);
        message = err.response.data;
        break;
      case 401:
        console.log('Authentication needs to be');

        console.log(err.response.data);
        break;
      case 403:
        console.log('You do not have permission to access this page');
        console.log(err.response.data);
        break;
      case 404:
        console.log(err.response.data);
        message = (
          <React.Fragment>
            <h3>Not found</h3>
            <p> The address of this page either does not exist, or not used anymore</p>
          </React.Fragment>
        )





        break;
      case 503:
        console.log('Service unavailable.');
        break;
      case 502:
        console.log('502 bad gateway.');
        break;
      case 599:
        console.log('Network connect timeout error.');
        break;
      case 408:
        console.log('Request timedout.');
        break;
      default:
        console.log('Sorry, we are out of ' + '.');
    }


    dispatch({
      type: PRODUCT_ERROR,
      payload: message
    });
  }
};


// New product
// export const addProduct = async (dispatch, data) => {
//   try {
//     const res = await axios.post('http://localhost:8080/api/public/newproduct', data);

//     dispatch({
//       type: ADD_PRODUCT,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: PRODUCT_ERROR,
//       payload: err.response.msg
//     });
//   }
// };
// Product Provider Component

const ProductState = (props) => {
  const initialState = {
    products: [],
    current: null,
    filtered: null,
    errorMessage: null,
    isLoading: true
  };
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

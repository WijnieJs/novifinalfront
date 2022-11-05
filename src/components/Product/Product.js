import React, { useState, useContext } from 'react';

import Button from '../Button/Button';
import Image from '../Image/Image';
import placeHolderImage from '../../shared/images/devh.jpg';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import './Product.css';
import ProductActions from '../../shared/store/ProductActions';
import NotesContext from '../../shared/store/context';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
   const { dispatch, items } = useContext(NotesContext);

   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');

   let navigate = useNavigate();

   function navme(id) {
      console.log(id);
      // const res = await ProductActions.getById(id);
      // const prod = res.data;
      // SET AS CURRENT PROD
      navigate(`/productdetail/${id}`);
   }

   const addToCartHandler = async (id, title, price) => {
      let updated = [];
      let newQuantity = 0;
      // setErrorMessage('Product already in Cart');
      // setError(true);
      let newProduct = {
         id,
         title,
         price
      };
      dispatch({
         type: 'ADD_PRODUCT_TO_CART',
         payload: newProduct
      });
   };
   const removeFromCartHandler = (id) => {
      dispatch({
         type: 'REMOVE_PRODUCT_FROM_CART',
         payload: id
      });
   };

   const errorAcceptHandler = () => {
      setError(false);
      navigate(`/cart`);
   };
   const errorCancelHandler = () => {
      setError(false);
   };
   return (
      <>
         <ErrorHandler
            title='Item is in your cart'
            actionText='See cart'
            noActionText='Shop more'
            error={error}
            onHandle={errorAcceptHandler}
            onCancel={errorCancelHandler}
            msg={errorMessage}
         />
         <div className='product'>
            <div className='product__image'>
               <Image imageUrl={placeHolderImage} center />
            </div>
            <div className='product_items'>
               <h1 className='product__title'>{props.title}</h1>
               <div className='product__content'>{props.content}</div>
            </div>
            <div className='product__actions'>
               <Button
                  mode='raised'
                  onClick={() =>
                     addToCartHandler(
                        props.id,
                        props.title,
                        props.price
                     )
                  }
               >
                  Add
               </Button>
               <Button
                  mode='raised'
                  design='danger'
                  onClick={() => removeFromCartHandler(props.id)}
               >
                  DELETE CA
               </Button>
               <Button
                  mode='raised'
                  design='accent'
                  onClick={() => navme(props.id)}
               >
                  See
               </Button>
            </div>
         </div>
      </>
   );
};

export default Product;

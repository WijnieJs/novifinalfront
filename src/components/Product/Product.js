import React, { useState, useContext } from 'react';

import Button from '../Button/Button';
import Image from '../Image/Image';
import placeHolderImage from '../../shared/images/devh.jpg';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import './Product.css';
import ProductActions from '../../shared/store/ProductActions';
import NotesContext from '../../shared/store/notes-context';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
   const { dispatch, notes } = useContext(NotesContext);
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
   let navigate = useNavigate();

   function navme(id) {
      console.log(id);
      navigate(`/productdetail/${id}`);
   }

   const addToCartHandler = async (id) => {
      let updated = [];
      let newQuantity = 0;
      const findNotes = notes.find((note) => note.productId == id);
      if (findNotes) {
         setErrorMessage('Product already in Cart');

         setError(true);
      } else {
         const res = await ProductActions.getById(id);

         const prod = res.data;

         let newProduct = {
            productId: prod.id,
            price: prod.price
         };

         dispatch({
            type: 'ADD_NOTE',
            product: newProduct
         });
      }
   };
   // navigate(`/productdetail/${2}`);

   const errorAcceptHandler = () => {
      setError(false);
      navigate(`/cart`);
   };
   const errorCancelHandler = () => {
      setError(false);
   };
   return (
      <>
         {console.log(notes)}
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
                  onClick={() => addToCartHandler(props.id)}
               >
                  Add
               </Button>
               {/* {/* <Button mode='flat' onClick={props.onStartEdit}>
                     Edit
                  </Button> */}
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

import React, { useContext } from 'react';

import Button from '../Button/Button';
import Image from '../Image/Image';
import placeHolderImage from '../../shared/images/devh.jpg';
import './Product.css';
import ProductActions from '../../shared/store/ProductActions';
import NotesContext from '../../shared/store/notes-context';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
   const { dispatch } = useContext(NotesContext);
   let navigate = useNavigate();

   function navme(id) {
      console.log(id);
      navigate(`/productdetail/${id}`);
   }

   const addToCartHandler = async (id) => {
      try {
         console.log(id);
         const res = await ProductActions.getById(id);
         console.log(res.data);
         const prod = res.data;
         prod.amount = 1;
         dispatch({
            type: 'ADD_NOTE',
            product: prod
         });
         return res;
      } catch (err) {
         console.log(err);
      }

      // navigate(`/productdetail/${2}`);
   };

   return (
      <>
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

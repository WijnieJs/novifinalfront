import React, { useContext } from 'react';

import Button from '../Button/Button';
import Image from '../Image/Image';
import placeHolderImage from '../../shared/images/devh.jpg';
import './Product.css';
import ProductActions from '../../shared/store/ProductActions';
import NotesContext from '../../shared/store/notes-context';
const Product = (props) => {
   const { dispatch } = useContext(NotesContext);

   const addToCartHandler = async () => {
      try {
         const res = await ProductActions.getById(2);
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
                  onClick={() => addToCartHandler()}
               >
                  Add
               </Button>
               {/* <Button mode='flat' onClick={props.onStartEdit}>
                     Edit
                  </Button>
                  <Button
                     mode='flat'
                     design='danger'
                     onClick={props.onDelete}
                  >
                     Delete
                  </Button> */}
            </div>
         </div>
      </>
   );
};

export default Product;

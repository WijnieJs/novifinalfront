import React, { useContext } from 'react';

import Button from '../Button/Button';
import Image from '../Image/Image';

import placeHolderImage from '../../shared/images/devh.jpg';
import './Product.css';

const Product = (props) => {
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
                  onClick={() => console.log(props.id)}
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

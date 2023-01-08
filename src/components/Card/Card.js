import React, { useContext } from 'react';
import ShopContext from '../../shared/store/context';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

import Backdrop from '../Backdrop/Backdrop';
import Modal from '../Modal/Modal';
import './Card.css';

const Card = (props) => {
   const state = useContext(ShopContext);
   const navigate = useNavigate();
   const items = state.shop.cart.items;

   const navMeToCheckout = () => {
      navigate('/checkout');
   };
   const navMeBackToShop = () => {
      navigate('/allproducts');
   };
   return (
      <div className={`card ${props.className}`} style={props.style}>
         <Backdrop />
         <Modal
            onAcceptModal={navMeBackToShop}
            onCancelModal={navMeToCheckout}
            noActionText='Go to Checkout'
            actionText='Go to Shop'
         >
            <h1>Cart items</h1>

            {items.map((item) => (
               <>
                  <p className='cart_items'>
                     {item.title} {item.quantity}
                  </p>
               </>
            ))}
            {items.length < 1 && <h3>No items here</h3>}
         </Modal>
      </div>
   );
};

export default Card;

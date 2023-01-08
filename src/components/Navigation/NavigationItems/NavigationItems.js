import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItems.css';

let navItems = [
   { id: 'shop', text: 'Shop', link: '/allproducts', auth: false },
   { id: 'feed', text: 'Feed', link: '/feed', auth: false },
   { id: 'login', text: 'Login', link: '/login', auth: false },
   { id: 'signup', text: 'Signup', link: '/signup', auth: false },
   { id: 'cart', text: 'Cart', link: '/cart', auth: false },
   // User auth routes
   { id: 'cart', text: 'Cart', link: '/cart', auth: true },

   { id: 'shop', text: 'Shop', link: '/allproducts', auth: true },
   { id: 'add', text: 'Add', link: '/newproduct', auth: true }
];

const NavigationItems = (props) => {
   return [
      ...navItems
         .filter((item) => item.auth === props.isAuth)
         .map((item) => (
            <li
               key={item.id}
               className={[
                  'navigation-item',
                  props.mobile ? 'mobile' : ''
               ].join(' ')}
            >
               <NavLink to={item.link} onClick={props.onChoose}>
                  {item.text}
               </NavLink>
            </li>
         )),

      props.isAdmin && (
         <li
            className={[
               'navigation-item',
               props.mobile ? 'mobile' : ''
            ].join(' ')}
         >
            <NavLink to='/admin' onClick={props.onChoose}>
               Admin
            </NavLink>
         </li>
      ),
      props.isAuth && (
         <li className='navigation-item' key='logout'>
            <button onClick={props.onLogout}>Logout</button>
         </li>
      )
   ];
};

export default NavigationItems;

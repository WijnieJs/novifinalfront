import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItems.css';

let navItems = [
   { id: 'list', text: 'List', link: '/products', auth: false },
   { id: 'login', text: 'Login', link: '/login', auth: false },
   { id: 'signup', text: 'Signup', link: '/signup', auth: false },
   { id: 'feed', text: 'Feed', link: '/', auth: false },

   // User auth routes
   { id: 'cart', text: 'Cart', link: '/cart', auth: true },
   { id: 'sales', text: 'Sales', link: '/sales', auth: true },
   { id: 'detail', text: 'De', link: '/productDetail', auth: true },
   { id: 'row', text: 'FeRowed', link: '/productsrow', auth: true }
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
               <NavLink to={item.link} exact onClick={props.onChoose}>
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
            <NavLink to='/admin' exact onClick={props.onChoose}>
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

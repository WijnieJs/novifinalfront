import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import MobileToggle from '../MobileToggle/MobileToggle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import './MainNavigation.css';

const MainNavigation = (props) => {
   return (
      <nav className='main-nav'>
         <MobileToggle onOpen={props.onOpenMobileNav} />
         <div className='main-nav__logo'>
            <NavLink to='/allproducts'>
               <Logo />
            </NavLink>
         </div>
         <div className='spacer' />
         <ul className='main-nav__items'>
            <NavigationItems
               isAuth={props.isAuth}
               onLogout={props.onLogout}
               isAdmin={props.admin}
               isMod={props.mod}
            />
         </ul>
      </nav>
   );
};

export default MainNavigation;

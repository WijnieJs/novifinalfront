import React from 'react'
import { NavLink } from 'react-router-dom'

import MobileHandler from '../MobileHandler/MobileHandler'
import Logo from '../../UI-interfaces/Logo/Logo'
import NavItems from '../NavItems/NavItems'

import './MainNav.css'

const MainNav = (props) => (
  <nav className="main-nav">
    <MobileHandler onOpen={props.onOpenMobileNav} />
    <div className="main-nav__logo">
      <NavLink to="/">
        <Logo />
      </NavLink>
    </div>
    <div className="spacer" />
    <ul className="main-nav__items">
      <NavItems isAuth={props.isAuth} onLogout={props.onLogout} />
    </ul>
  </nav>
)

export default MainNav

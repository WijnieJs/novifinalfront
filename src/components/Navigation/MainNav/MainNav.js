import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import MobileHandler from '../MobileHandler/MobileHandler'
import Logo from '../../Interfaces/Logo/Logo'
import NavItems from '../NavItems/NavItems'

import './MainNav.css'

const MainNav = (props) => {

  const [show, handleshow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true)
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    }
  }, []);



  return (
    <nav className="main-nav">

      <MobileHandler onOpen={props.onOpenMobileNav} />
      <div className="main-nav__logo">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <div className="spacer" />
      <ul className="main-nav__items">
        <NavItems auth={props.isAuth} onLogout={props.onLogout} />
      </ul>
    </nav>
  )
}

export default MainNav

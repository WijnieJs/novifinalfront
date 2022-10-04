import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from "../../Button/Button"

import './NavItems.css'

const navItems = [
  { id: 'addproduct', text: 'Add', link: '/new-product', auth: true },
  { id: 'products', text: 'Shop', link: '/products', auth: false },
  { id: 'favorites', text: 'Account', link: '/favorites', auth: true },
  { id: 'login', text: 'Login', link: '/login', auth: false },
  { id: 'signup', text: 'Signup', link: '/signup', auth: false },

]

const NavItems = (props) => [
  ...navItems
    .filter((item) => item.auth === props.auth)
    .map((item) => (
      <li
        key={item.id}
        className={['navigation-item', props.mobile ? 'mobile' : ''].join(' ')}
      >
        <NavLink to={item.link} exact onClick={props.onChoose}>
          {item.text}
        </NavLink>
      </li>
    )),
  props.isAuth && (
    <li key="logout">
      <Button
        mode="raised"
        design="danger"
        type="submit"
        onClick={props.onLogout}
      >
        Logout
      </Button>
    </li>
  ),
]

export default NavItems

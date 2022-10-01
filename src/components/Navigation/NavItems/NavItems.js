import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../Forms/Button'
import './NavItems.css'

const navItems = [
  { id: 'addproduct', text: 'Add', link: '/new-product', auth: true },
  { id: 'profile', text: 'Account', link: '/profile', auth: true },
  { id: 'shop', text: 'Shop', link: '/products', auth: false },
  { id: 'login', text: 'Login', link: '/login', auth: false },
  { id: 'home', text: 'Home', link: '/', auth: false },

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

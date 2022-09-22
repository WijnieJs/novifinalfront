import React from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1> Vintage logo</h1>
        <button>Cart list</button>
      </header>
      <button>CART</button>
    </React.Fragment>
  )
}

export default Header

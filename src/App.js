import React, { useState } from 'react'

import Layout from "./components/Layout/Layout"

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainNavigation from "./components/Navigation/MainNavigation/MainNavigation"
import MobileNav from './components/Navigation/MobileNavigation/MobileNavigation'
import Backdrop from "./components/Interfaces/Backdrop/Backdrop"
import ProductsRow from './pages/Product/ProductRow'
import Products from './pages/Product/Products'
import Toolbar from './components/Toolbar/Toolbar'

import Productdetail from './pages/Product/ProductDetail'


import Home from "./pages/Home"
import Auth from "./pages/Auth/Auth";
import Signup from './pages/Auth/Signup'
import AuthState from "./shared/store/auth/AuthState"
import AlertState from "./shared/store/alert/AlertState"
import "./App.css"

function App() {
  const [auth, setIsAuth] = useState(false)
  const [navState, setNavState] = useState({
    showBackdrop: false,
    showMobileNav: false,
    error: null,
  })
  const { showBackdrop, showMobileNav, error } = navState

  const mobileNavHandler = (isOpen) => {
    setNavState({ showMobileNav: isOpen, showBackdrop: isOpen })
  }

  const backdropClickHandler = () => {
    setNavState({ showBackdrop: false, showMobileNav: false, error: null })
  }
  const logoutHandler = () => {
    console.log('Logout')
  }
  let routes = (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/productsrow" element={<ProductsRow />} />
      <Route path="/productDetail" element={<Productdetail />} />
      <Route path="/products" element={<Products />} />

      <Route path="/login" element={<Auth />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
  )
  return (
    <AuthState>
      <AlertState>
        <BrowserRouter>
          <React.Fragment>
            {showBackdrop && <Backdrop onClick={backdropClickHandler} />}
            <Layout
              header={
                <Toolbar>
                  <MainNavigation
                    onOpenMobileNav={() => mobileNavHandler(true)}
                    onLogout={logoutHandler}
                    isAuth={auth}
                  />
                </Toolbar>
              }
              mobileNav={
                <MobileNav
                  open={showMobileNav}
                  mobile
                  onChooseItem={() => mobileNavHandler(false)}
                  onLogout={logoutHandler}
                  isAuth={auth}
                />
              }
            />
            {routes}
          </React.Fragment>
        </BrowserRouter>
      </AlertState>
    </AuthState>

  )
}
export default App;

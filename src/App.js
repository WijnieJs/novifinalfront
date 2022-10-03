import React, { useState } from 'react'

import Layout from "./components/Layout/Layout"
import Toolbar from './components/Navigation/ToolBar/ToolBar'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainNav from "./components/Navigation/MainNav/MainNav"
import MobileNav from './components/Navigation/MobileNav/MobileNav'
import Backdrop from "./components/Interfaces/Backdrop/Backdrop"
import Products from './pages/product/Products'
import Home from "./pages/Home"
import LoginPage from "./pages/auth/Login";
import SignupPage from './pages/auth/Signup'
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

      <Route path="/products" element={<Products />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

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
                  <MainNav
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

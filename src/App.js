import React, { useEffect, useReducer, useState } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'


import Layout from './components/Layout/Layout'
import ToolBar from './components/Navigation/ToolBar/ToolBar'
import MobileNav from './components/Navigation/MobileNav/MobileNav'
import MainNav from './components/Navigation/MainNav/MainNav'
import BackDrop from './components/UI-interfaces/Backdrop'
import ProductPage from './pages/Product/ProductPage'
import NewProduct from './pages/Product/NewProduct'
import Home from './pages/Home/Home'


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
    // setAuth(false)
    console.log('Logout')
    // localStorage.removeItem('token')
    // localStorage.removeItem('expiryDate')
    // localStorage.removeItem('userId')
  }

  // useEffect(() => {
  //   const products = JSON.parse(localStorage.getItem('products'))
  //   console.log(products)

  //   if (products) {
  //     dispatch({ type: 'INIT_PRODUCTS', products })
  //   }
  // }, [])

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const products = await fetchUsers()
  //     console.log(products)
  //     localStorage.setItem('products', JSON.stringify(products))
  //   }
  //   getProducts()
  // }, [products])

  // const loginHandler = (event, AuthData) => {
  //   event.preventDefault()
  //   setAuthLoading(true)
  //   console.log(AuthData)

  //   setAuthLoading(false)
  // }

  let routes = (
    <Switch>
      <Route path="/" exact render={(props) => <Home {...props} />} />
      <Route
        path="/products"
        exact
        render={(props) => <ProductPage {...props} />}
      />
      <Route
        path="/new-product"
        exact
        render={(props) => <NewProduct {...props} />}
      />
    </Switch>
  )
  // if (auth) {
  //   routes = (
  //     <Switch>
  //       <Route
  //         path="/new-product"
  //         exact
  //         render={(props) => <NewProduct {...props} />}
  //       />
  //     </Switch>
  //   )
  // }
  return (
    <React.Fragment>


      {showBackdrop && <BackDrop onClick={backdropClickHandler} />}

      <Layout
        header={
          <ToolBar>
            <MainNav
              onOpenMobileNav={() => mobileNavHandler(true)}
              onLogout={logoutHandler}
              isAuth={auth}
            />
          </ToolBar>
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
  )
}

/// ADDING ROUTES
// ADDING ADD TO CART
// ADD LOGIN
// Add Checkout

export default withRouter(App)

import React, { useEffect, useReducer, useState } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import ToolBar from './components/Navigation/ToolBar/ToolBar'
import MobileNav from './components/Navigation/MobileNav/MobileNav'
import MainNav from './components/Navigation/MainNav/MainNav'
import BackDrop from './components/UI-interfaces/Backdrop'
import ProductList from './pages/Products/ProductList'
import NewProduct from './pages/Products/NewProduct'
import Home from './pages/Home/Home'
import LoginPage from './pages/Auth/Login'

import ProductsContext from './utils/context/Products/products-context'
import productsReducer from './utils/context/Products/ProductsReducer'

import AuthState from './utils/context/Auth/AuthState'

import { fetchUsers } from './utils/Hooks/Api-hook'

function App() {
  const [products, dispatch] = useReducer(productsReducer, [])
  const [navState, setNavState] = useState({
    showBackdrop: false,
    showMobileNav: false,
    error: null,
  })
  const { showBackdrop, showMobileNav, error } = navState

  const [auth, setAuth] = useState(false)
  const [authLoading, setAuthLoading] = useState(false)

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

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products'))
    console.log(products)

    if (products) {
      dispatch({ type: 'INIT_PRODUCTS', products })
    }
  }, [])

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchUsers()
      console.log(products)
      localStorage.setItem('products', JSON.stringify(products))
    }
    getProducts()
  }, [products])

  const loginHandler = (event, AuthData) => {
    event.preventDefault()
    setAuthLoading(true)
    console.log(AuthData)
    setAuthLoading(false)
  }

  let routes = (
    <Switch>
      <Route path="/" exact render={(props) => <Home {...props} />} />

      <Route
        path="/authentication"
        exact
        render={(props) => (
          <LoginPage {...props} onLogin={loginHandler} loading={authLoading} />
        )}
      />
      <Route
        path="/products"
        exact
        render={(props) => <ProductList {...props} />}
      />
      {/* <Route
        path="/new-product"
        exact
        render={(props) => <NewProduct {...props} />}
      /> */}
    </Switch>
  )
  if (auth) {
    routes = (
      <Switch>
        <Route
          path="/new-product"
          exact
          render={(props) => <NewProduct {...props} />}
        />
      </Switch>
    )
  }
  return (
    <React.Fragment>
      <AuthState>
        <ProductsContext.Provider value={{ products, dispatch }}>
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
        </ProductsContext.Provider>
      </AuthState>
    </React.Fragment>
  )
}

/// ADDING ROUTES
// ADDING ADD TO CART
// ADD LOGIN
// Add Checkout

export default withRouter(App)

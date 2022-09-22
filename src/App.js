import React from 'react'
import Header from './components/Layout/Header'
import Products from './pages/Products'

import { ProductProvider } from './components/context/product/ProductContext'
function App() {
  return (
    <React.Fragment>
      <ProductProvider>
        <Header />
        <main>
          <h1>Here it is</h1>
          <Products />
        </main>
        {/* Add login screen, register screen */}
        {/* add Form  hook to send credentials to api */}
        {/* if registering  then save user */}
        {/* Jwt token returned add too local storage */}
        {/* create user state */}
        {/* name, id , email, auth, isAdmin */}
        {/* Load the products from the api  in the app & all querry*/}
        {/* Create page for a single product item, and productlist */}
        {/* setup productstate */}
      </ProductProvider>
    </React.Fragment>
  )
}

export default App

import React from 'react'
import { Route, Routes, Navigate, Link } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Products from './pages/Products/Products'
import NewProduct from './pages/Products/NewProduct'
import { ProductProvider } from './utils/Context/product/ProductContext'
function App() {
  return (
    <React.Fragment>
      <ProductProvider>
        <Layout>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/new-product" element={<NewProduct />} />
          </Routes>
        </Layout>
      </ProductProvider>
    </React.Fragment>
  )
}

export default App
{
  /* Add login screen, register screen */
}
{
  /* add Form  hook to send credentials to api */
}
{
  /* if registering  then save user */
}
{
  /* Jwt token returned add too local storage */
}
{
  /* create user state */
}
{
  /* name, id , email, auth, isAdmin */
}
{
  /* Load the products from the api  in the app & all querry*/
}
{
  /* Create page for a single product item, and productlist */
}
{
  /* setup productstate */
}

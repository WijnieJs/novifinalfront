import React, { useEffect, useReducer } from 'react'

import { Route, Routes, Navigate, NavLink } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import ProductList from './pages/Products/ProductList'
import NewProduct from './pages/Products/NewProduct'
import ProductsContext from './utils/context/products-context'
import productsReducer from './utils/Reducers/ProductsReducer'
import { fetchUsers } from './utils/Hooks/Api-hook'
function App() {
  const [products, dispatch] = useReducer(productsReducer, [])

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products'))

    if (products) {
      dispatch({ type: 'INIT_PRODUCTS', products })
    }
  }, [])

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchUsers()

      localStorage.setItem('products', JSON.stringify(products))
    }
    getProducts()
  }, [products])

  return (
    <React.Fragment>
      <ProductsContext.Provider value={{ products, dispatch }}>
        <Layout>
          <ProductList />
          {/* <NewProduct /> */}
        </Layout>
      </ProductsContext.Provider>
    </React.Fragment>
  )
}

export default App

import React, { useEffect, useContext } from 'react'
import ProductContext from '../components/context/product/ProductContext'
import { fetchUsers } from '../components/context/product/ProductAction'

const Products = () => {
  const { products, loading, repos, dispatch } = useContext(ProductContext)

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getProducts = async () => {
      const productData = await fetchUsers()
      dispatch({ type: 'GET_PRODUCTS', payload: productData })
    }
    getProducts()
  }, [dispatch])

  return <div>{console.log(products)}</div>
}

export default Products

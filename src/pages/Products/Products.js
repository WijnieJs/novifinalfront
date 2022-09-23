import React, { useEffect, useContext } from 'react'
import ProductContext from '../../utils/Context/product/ProductContext'
import { fetchUsers } from '../../utils/Context/product/ProductAction'

import ProductList from '../../components/Products/ProductList'

const Products = () => {
  const { products, loading, repos, dispatch } = useContext(ProductContext)

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getProducts = async () => {
      const productData = await fetchUsers()
      console.log(productData)

      dispatch({ type: 'GET_PRODUCTS', payload: productData })
    }
    getProducts()
  }, [dispatch])

  const placeDeletedHandler = () => {
    console.log('add')
  }

  return (
    <React.Fragment>
      {!loading && products && (
        <ProductList products={products} onDeletePlace={placeDeletedHandler} />
      )}
    </React.Fragment>
  )
}

export default Products

import React, { useContext } from 'react'

import ProductsContext from '../../utils/context/product/productContext'

import ProductItemsList from '../../components/Products/ProductItemsList'
import './ProductPage.css'

const ProductPage = () => {


  return (
    <ul className="product-list">

      <ProductItemsList />

    </ul>
  )
}

export default ProductPage;

import React, { useContext } from 'react'

import ProductsContext from '../../utils/context/products-context'

import ProductItem from '../../components/Products/ProductItem'
import './ProductList.css'

const ProductsList = () => {
  const { products } = useContext(ProductsContext)
  console.log(products)

  return (
    <ul className="product-list">
      {products.map((prod) => (
        <ProductItem key={prod.title} product={prod} />
      ))}
    </ul>
  )
}

export { ProductsList as default }

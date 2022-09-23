import React from 'react'
import Card from '../UI-interfaces/Card'
import ProductItem from './ProductItem'
import Button from '../Forms/Button'
import './ProductList.css'

const ProductList = (props) => {
  if (props.products.length === 0) {
    return (
      <div className="product-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    )
  }
  return (
    <ul className="product-list">
      {console.log(props)}

      {props.products.map((prod) => (
        <ProductItem key={prod.id} product />
      ))}
    </ul>
  )
}

export default ProductList

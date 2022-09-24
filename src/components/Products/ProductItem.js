import React, { useContext } from 'react'
import ProductContext from '../../utils/context/products-context'
import Card from '../UI-interfaces/Card'
import Button from '../Forms/Button'
import Image from '../UI-interfaces/Image'

import Sampleimage from '../../images/jsgreen.png'
import './ProductItem.css'

const ProductItem = ({ product }, props) => {
  const { dispatch } = useContext(ProductContext)

  return (
    <React.Fragment>
      <li className="product-item">
        <Card className="product-item__content">
          <div className="product-item__image">
            <Image contain imageUrl={Sampleimage} />
          </div>

          <div className="product-item__info">
            <h2>{product.title}</h2>
            <h3>{product.description}</h3>
            <p> {product.price}</p>
          </div>

          <Button
            onClick={() =>
              dispatch({ type: 'REMOVE_NOTE', title: product.title })
            }
          >
            DELETE
          </Button>
        </Card>
      </li>
    </React.Fragment>
  )
}

export { ProductItem as default }

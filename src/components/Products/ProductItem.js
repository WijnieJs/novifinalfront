import React from 'react'

import productHolder from '../../images/s.webp'
import Button from '../Forms/Button'
import Card from '../UI-interfaces/Card'
import './ProductItem.css'

const ProductItem = (props) => {
  return (
    <React.Fragment style={{ marginBottom: '1rem' }}>
      <li>
        <Card className="product-item">
          {/* {props.loading && <LoadingSpinner asOverlay />} */}
          <div className="product-item__image">
            <img src={productHolder} alt={props.title} />
          </div>
          <div className="product-item__info">
            <h2>Title</h2>
            <h3>brand</h3>
            <p>descriptiom</p>
            <p>price</p>
          </div>
          <div className="product-item__actions">
            <Button inverse onClick={() => console.log('add to card')}>
              AddToCart
            </Button>
            {/* {auth.userId === props.creatorId && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )} */}

            <Button to={`/places/${props.id}`}>EDIT</Button>

            <Button danger onClick={() => console.log('add to favs')}>
              Add favo
            </Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  )
}

export default ProductItem

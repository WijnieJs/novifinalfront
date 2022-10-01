import React from 'react';
import Card from "../UI-interfaces/Card"
import Image from "../UI-interfaces/Image"
import Button from "../Forms/Button"

import './ProductItem.css'


import Sampleimage from '../../images/jsgreen.png'

const ProductItem = () => {
  return (
    <li className="product-item">
      <Card className="product-item__content">
        {/* <div className="product-item__image">
          <Image contain imageUrl={Sampleimage} />
        </div> */}

        <div className="product-item__info">
          {/* <h2>{product.title}</h2>
          <h3>{product.description}</h3>
          <p> {product.price}</p> */}
          <h2>Title</h2>

        </div>

        <Button

        >
          DELETE
        </Button>
      </Card>
    </li>
  );
}

export default ProductItem;

import React, { useState, useContext } from 'react';


import Button from "../Button/Button"
import Card from "../Card/Card";
import "./ProductItem.css"



const ProductItem = (props) => {
  // const { price, description, title, imageURL } = props.product
  console.log(props)
  return (
    <Card>
      <header className="post__header">
        <h3 className="post__meta">
          add it hereee
          {/* {props.author} on {props.date} */}
        </h3>
        {/* <h1 className="post__title">{props.title}</h1> */}
      </header>

      <React.Fragment>
        {/* <Button inverse onClick={confirmDeleteHandler}>
          VIEW
        </Button> */}
        <p>Some actions</p>
      </React.Fragment>
    </Card>
  );
}

export default ProductItem;

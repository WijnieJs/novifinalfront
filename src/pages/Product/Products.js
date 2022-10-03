import React from 'react';

import Row from "../../shared/api/row"
import requests from "../../shared/utils/requests"

import classes from "./Product.module.css"

const ProductsPage = () => {
  const { withQuery } = requests;
  { console.log("inhere") }
  return (
    <div className={classes.home}>
      <h5>Hi we learning new thing</h5>
      <Row title="newline" fetchUrl={requests.fetchAllProducts}> </Row>
      <Row title="secondline" fetchUrl={withQuery(requests.fetchByTitle, "char")}> </Row>

    </div>
  )
}

export default ProductsPage

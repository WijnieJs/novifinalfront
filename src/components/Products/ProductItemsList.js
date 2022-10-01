import React, { useState, useEffect } from 'react';
import { useProducts, getProducts } from "../../utils/context/product/ProductState"

import ProductItem from "./ProductItem"
import Card from "../UI-interfaces/Card"
import Loader from "../UI-interfaces/Loader/Loader"
const ProductItemsList = () => {
  const [productState, productDispatch] = useProducts();
  const { products, filtered, isLoading, errorMessage } = productState;;


  useEffect(() => {
    getProducts(productDispatch);

  }, [productDispatch]);




  return (
    <section>
      {isLoading && (
        <Loader />

      )}
      {products.length <= 0 && !isLoading ? (
        <p style={{ textAlign: 'center' }}>No posts found.</p>
      ) : null}

      {/* {errorMessage && (
        <h3>  {Object.values(errorMessage)} </h3>

      )} */}
      {console.log(errorMessage + "E")}
      {errorMessage}



    </section>
  )
}

export { ProductItemsList as default }

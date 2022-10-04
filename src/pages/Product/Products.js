import React, { useEffect, useState } from 'react';

import axios from '../../shared/api/http-common';
import requests from '../../shared/utils/requests';
import ProductItem from '../../components/Products/ProductItem';

const ProductList = () => {
  const [loadedProducts, setLoadedProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  let fetchUrl = requests.fetchAllProducts;
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);

      setLoadedProducts(req.data);
      return req;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <React.Fragment>
      <h1>Error</h1>
      {isLoading && (
        <div className="center">
          <h3>Loading</h3>
        </div>
      )}
      {!isLoading && loadedProducts && (
        <ProductList items={loadedProducts}
          handler={() => console.log("log")} />
      )}

      <ProductItem />
    </React.Fragment>
  );
};

export default ProductList;

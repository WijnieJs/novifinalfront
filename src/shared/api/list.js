import React, { useState, useEffect, useContext } from 'react';
import axios from './http-common';
import Product from '../../components/Product/Product';

import './productslist.css';
const ProductList = ({ title, fetchUrl }) => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const req = await axios.get(fetchUrl);
         console.log(req.data);
         setProducts(req.data);
         return req;
      }

      fetchData();
   }, [fetchUrl]);

   return (
      <React.Fragment>
         <h2>{title}</h2>

         <div className='card_list_grid'>
            {products.map((prod) => (
               <Product
                  key={prod.id}
                  id={prod.id}
                  title={prod.title}
                  price={prod.price}
                  tags={prod.tags}
                  imageUrl={prod.file}
                  content={prod.description}
                  actions={true}
               />
            ))}
         </div>
      </React.Fragment>
   );
};

export default ProductList;

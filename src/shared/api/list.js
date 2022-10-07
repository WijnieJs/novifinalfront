import React, { useState, useEffect, useContext } from 'react';
import axios from './http-common';
import Product from '../../components/Product/Product';

import './productslist.css';
const Single = ({ title, fetchUrl }) => {
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
         {console.log(products)}
         <div className='card_list_grid'>
            {products.map((prod) => (
               <Product
                  key={prod.id}
                  id={prod.id}
                  title={prod.title}
                  price={prod.price}
                  tags={prod.tags}
                  content={prod.description}
                  onStartEdit={() => console.log('aaa')}
                  onDelete={() => console.log('aaa')}
               />
            ))}
         </div>
      </React.Fragment>
   );
};

export default Single;

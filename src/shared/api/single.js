import React, { useState, useEffect, useContext } from 'react';
import axios from './http-common';
import Product from '../../components/Product/Product';

import { GlobalContext } from '../store/GlobalState';

const Single = ({ title, fetchUrl }) => {
   const [product, setProduct] = useState([]);
   const { addFavorite } = useContext(GlobalContext);

   useEffect(() => {
      async function fetchData() {
         const req = await axios.get(fetchUrl);
         console.log(req.data);
         setProduct(req.data);
         return req;
      }

      fetchData();
   }, [fetchUrl]);

   return (
      <React.Fragment>
         <h2>{title}</h2>

         <h3>{product.description}</h3>
         <h3>{product.price}</h3>
         {product.tags &&
            product.tags.map((tag) => (
               <section key={product.id}>{tag}</section>
            ))}

         <div>
            <button
               style={{ padding: '30px' }}
               onClick={() => addFavorite(product)}
            >
               ADD TO FAVORITES
            </button>
         </div>
      </React.Fragment>
   );
};

export default Single;

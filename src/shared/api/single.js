import React, { useState, useEffect, useContext } from 'react';
import axios from './http-common';

const Single = ({ title, fetchUrl }, props) => {
   console.log(props);
   const [product, setProduct] = useState([]);

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
               onClick={() => console.log('dispatch add t')}
            >
               ADD TO FAVORITES
            </button>
         </div>
      </React.Fragment>
   );
};

export default Single;

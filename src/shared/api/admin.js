import React, { useState, useEffect } from 'react';
import axios from './http-common';
import Product from '../../components/Product/Product';

// const response = await axios.get('http://localhost:3000/660/private-content', {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//   }
// });

const List = ({ title, fetchUrl }) => {
   const [products, setProducts] = useState([]);
   const token = localStorage.getItem('user');
   const { id } = token;
   console.log(token.id);

   const token1 =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYWEiLCJpYXQiOjE2NjUwMzU3NzEsImV4cCI6MTY2NTEyMjE3MX0.yeDpvK3ybhGEUbFm4QRwC1VEotoCbGP33fVDhkmiJO4uuKilU6i9mCzXhaeqH6TPmU4-RH9w6Gv_YJYZls0lXg';
   useEffect(() => {
      async function fetchData() {
         const req = await axios.get(fetchUrl, {
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token1}`
            }
         });

         setProducts(req.data);
         return req;
      }

      fetchData();
   }, [fetchUrl]);

   return (
      <React.Fragment>
         <h2>{title}</h2>
      </React.Fragment>
   );
};

export default List;

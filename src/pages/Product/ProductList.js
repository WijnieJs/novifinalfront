import React, { useState, useEffect } from 'react';
import axios from '../../shared/api/http-common';

import List from '../../shared/api/list';
import requests from '../../shared/utils/requests';

const ProductList = () => {
   const { withQuery } = requests;
   const [fetchUrl, setFetchUrl] = useState(
      requests.fetchAllProducts
   );
   const [tags, setTags] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const req = await axios.get(
            'http://localhost:8080/api/public/tags'
         );
         setTags(req.data);
         return req;
      }

      fetchData();
   }, [fetchUrl]);

   const handleTags = (name) => {
      const url = withQuery(requests.fetchByTags, name);

      setFetchUrl(url);
   };

   return (
      <div className=''>
         {tags.map((tag) => {
            return (
               <p key={tag.name} onClick={() => handleTags(tag.name)}>
                  {tag.name}
               </p>
            );
         })}
         <List title='All Products' fetchUrl={fetchUrl}>
            {' '}
         </List>
         <h4>Populairr</h4>

         <h3>Sales</h3>
      </div>
   );
};

export default ProductList;

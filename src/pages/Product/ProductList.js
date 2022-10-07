import React from 'react';

import List from '../../shared/api/list';

import requests from '../../shared/utils/requests';

const ProductList = () => {
   const { withQuery } = requests;

   {
      console.log('inhere');
   }
   return (
      <div className=''>
         <List
            title='All Products'
            fetchUrl={requests.fetchAllProducts}
         >
            {' '}
         </List>
         <h4>Populairr</h4>

         <h3>Sales</h3>
      </div>
   );
};

export default ProductList;

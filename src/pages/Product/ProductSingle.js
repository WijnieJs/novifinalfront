import React from 'react';

import Single from '../../shared/api/single';

import requests from '../../shared/utils/requests';

const ProductList = () => {
   const { withQuery } = requests;

   {
      console.log('inhere');
   }
   return (
      <div className=''>
         <h5>Hi we learning new thing</h5>
         <Single
            title='HOT ITEMS'
            fetchUrl={withQuery(requests.fetchById, 2)}
         ></Single>
         <h4>Populairr</h4>
      </div>
   );
};

export default ProductList;

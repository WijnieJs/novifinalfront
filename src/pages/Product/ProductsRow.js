import React from 'react';

import Row from '../../shared/api/row';

import requests from '../../shared/utils/requests';

const ProductsRow = () => {
   const { withQuery } = requests;
   return (
      <div className=''>
         <h5>Hi we learning new thing</h5>
         <Row
            title='All Products'
            fetchUrl={requests.fetchAllProducts}
         >
            {' '}
         </Row>
         <h4>Populairr</h4>

         <h3>Sales</h3>
      </div>
   );
};

export default ProductsRow;

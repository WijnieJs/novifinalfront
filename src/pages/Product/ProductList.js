import React, { useContext } from 'react';

import List from '../../shared/api/list';
import { GlobalContext } from '../../shared/store/GlobalState';
import requests from '../../shared/utils/requests';

const ProductList = () => {
   const { addFavorite } = useContext(GlobalContext);

   const { withQuery } = requests;

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

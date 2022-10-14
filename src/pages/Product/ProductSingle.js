import React from 'react';

import Single from '../../shared/api/single';

import requests from '../../shared/utils/requests';

const ProductList = (props) => {
   // const { favorites } = useContext(GlobalContext);

   const { withQuery } = requests;
   console.log(props);
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

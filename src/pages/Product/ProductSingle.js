import React from 'react';
import { useParams } from 'react-router-dom';

import Single from '../../shared/api/single';
import AuthActions from '../../shared/store/AuthActions';
import requests from '../../shared/utils/requests';

const ProductSingle = (props) => {
   const { id } = useParams();

   const { withQuery } = requests;

   return (
      <div className=''>
         <h5>Hi we learning new thing</h5>
         <Single
            title='HOT ITEMS'
            fetchUrl={withQuery(requests.fetchById, id)}
         ></Single>
         <h4>Populairr</h4>
      </div>
   );
};

export default ProductSingle;

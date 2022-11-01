import React from 'react';

import AuthActions from '../shared/store/AuthActions';

const Admin = () => {
   const user = AuthActions.getCurrentUser();

   console.log(user);
   return (
      <div className=''>
         <h5>Hi we learning new thing</h5>
         <h4>Populairr</h4>

         <h3>Sales</h3>
      </div>
   );
};

export default Admin;

import React, { useContext } from 'react';

import ShopContext from '../shared/store/context';

const Home = () => {
   const state = useContext(ShopContext);

   console.log(JSON.stringify(state.shop.cart, null, 3));
   return <div></div>;
};

export default Home;

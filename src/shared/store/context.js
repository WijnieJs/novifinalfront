import React from 'react';

const ShopContext = React.createContext({
   cart: {
      items: []
   },
   show: false,
   currentProduct: {}
});

export default ShopContext;

import React, { useState, useEffect } from 'react';

const Price = (props) => {
   const [price, setPrice] = useState(0);
   console.log(props);

   useEffect(() => {
      setPrice(props.product.price);
   }, []);
   return (
      <div>
         <h5>{price}</h5>
         <h5>{props.product.price}</h5>
      </div>
   );
};

export default Price;

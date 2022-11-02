import React, { useState, useContext } from 'react';
import NotesContext from '../../shared/store/notes-context';
import Price from './Price';
const Checkout = () => {
   const notes = useContext(NotesContext);
   const products = notes.notes;
   const [quantity, setQuantity] = useState(1);
   console.log(products);
   return (
      <div>
         <Price product={products[0]} />
      </div>
   );
};

export default Checkout;

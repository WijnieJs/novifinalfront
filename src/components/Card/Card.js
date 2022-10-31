import React, { useContext } from 'react';
import NotesContext from '../../shared/store/notes-context';
import './Card.css';

const Card = (props) => {
   const notes = useContext(NotesContext);

   const cart = {
      items: notes
   };
   return (
      <div className={`card ${props.className}`} style={props.style}>
         {props.children}
         {console.log(cart)}
      </div>
   );
};

export default Card;

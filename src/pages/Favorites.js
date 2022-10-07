import React, { useContext } from 'react';
import { GlobalContext } from '../shared/store/GlobalState';
import NotesContext from '../shared/store/notes-context';
const Favorites = () => {
   const { favorites } = useContext(GlobalContext);
   const { notes } = useContext(NotesContext);

   console.log(notes);
   return (
      <div>
         <h1>In state</h1>
         {notes && <h4>{favorites.id}</h4>}
      </div>
   );
};

export default Favorites;

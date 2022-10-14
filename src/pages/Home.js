import React, { useContext } from 'react';

import NotesContext from '../shared/store/notes-context';

const Home = () => {
   const notes = useContext(NotesContext);
   console.log(notes);
   return <div></div>;
};

export default Home;

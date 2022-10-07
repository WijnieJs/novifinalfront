import React, { useContext } from 'react';
import { GlobalContext } from '../store/GlobalState';

const Favorites = () => {

  const { favorites } = useContext(GlobalContext);

  return (
    <div>
      <h1>In state</h1>
      {favorites && (
        <h4>{favorites}</h4>
      )}
    </div>
  );
}

export default Favorites;

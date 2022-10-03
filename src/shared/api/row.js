import React, { useState, useEffect } from 'react';
import axios from './http-common';

const Row = ({ title, fetchUrl }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl)

      setProducts(req.data)
      return req;
    }

    fetchData()
  }, [fetchUrl])

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;

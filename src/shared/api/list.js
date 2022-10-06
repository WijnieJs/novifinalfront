import React, { useState, useEffect } from 'react';
import axios from "../api/http-common"

const List = ({ title, fetchUrl }) => {
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
    <React.Fragment>
      <h2>{title}</h2>



    </React.Fragment>

  );
}

export default List;

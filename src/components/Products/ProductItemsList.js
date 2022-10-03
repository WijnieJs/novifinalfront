// import React, { useState, useEffect } from 'react';
// import Loader from "../UI-interfaces/Loader/Loader"


// const ProductItemsList = ({ title, fetchUrl }) => {
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     async function fetchData() {
//       const req = await axios.get(fetchUrl)

//       setProducts(req.data)
//       return req;
//     }

//     fetchData()
//   }, [fetchUrl])

//   console.log(products)
//   return (
//     <div>
//       <h2>{title}</h2>
//     </div>
//   );
// }

// export { ProductItemsList as default }

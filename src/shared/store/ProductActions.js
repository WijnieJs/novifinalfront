import axios from '../api/http-common';

// const logout = () => {
//    localStorage.removeItem('user');
// };

// const getCurrentUser = () => {
//    return JSON.parse(localStorage.getItem('user'));
// };
const add = (formData) => {
   return axios.post(
      'http://localhost:8080/api/public/newproduct',
      formData
   );
};
const edit = (formData) => {
   return axios.post(
      'http://localhost:8080/api/public/editProduct',
      formData
   );
};

const getById = (id) => {
   const res = axios.get(
      `http://localhost:8080/api/public/productById/${id}`
   );

   return res;
};

const ProductActions = {
   add,
   edit,

   getById
};

export default ProductActions;

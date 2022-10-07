import axios from '../api/http-common';

const login = async (formData) => {
   const response = await axios.post(
      'http://localhost:8080/api/auth/signin',
      formData
   );
   if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
      localStorage.setItem(
         'token',
         JSON.stringify(response.data.accessToken)
      );
      return response.data;
   }
};
const logout = () => {
   localStorage.removeItem('user');
};

const getCurrentUser = () => {
   return JSON.parse(localStorage.getItem('user'));
};
const register = (formData) => {
   return axios.post(
      'http://localhost:8080/api/auth/signup',
      formData
   );
};

const AuthActions = {
   login,
   logout,
   getCurrentUser,
   register
};

export default AuthActions;

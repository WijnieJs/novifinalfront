import { useState, useRef, useContext } from 'react';
import requests from '../../shared/utils/requests';
import { GlobalContext } from '../../shared/store/GlobalState';
import { useNavigate } from 'react-router-dom';
import AuthActions from '../../shared/store/AuthActions';

let fetchUrl = requests.signUp;

const Auth = (props) => {
   const navigate = useNavigate();
   const usernameInputRef = useRef();
   const passwordInputRef = useRef();

   const submitHandler = async (event) => {
      event.preventDefault();

      const enteredusername = usernameInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
      const formData = {
         username: enteredusername,
         password: enteredPassword
      };
      try {
         await AuthActions.login(formData);
         navigate('/');
         window.location.reload();
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div>
         <h1>{'Login / Sign Up'}</h1>
         <form onSubmit={submitHandler}>
            <div className='form-controll'>
               <div className='control'>
                  <label htmlFor='email'>Your Username</label>

                  <input
                     type='text'
                     id='username'
                     required
                     ref={usernameInputRef}
                  />
               </div>

               <div className='control'>
                  <label htmlFor='email'>Your Password</label>

                  <input
                     type='password'
                     id='password'
                     required
                     ref={passwordInputRef}
                  />
               </div>
            </div>
            <button>SEND</button>
         </form>
      </div>
   );
};

export default Auth;

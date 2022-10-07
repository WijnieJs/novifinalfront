import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import AuthActions from '../../shared/store/AuthActions';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import {
   VALIDATOR_EMAIL,
   VALIDATOR_MINLENGTH,
   VALIDATOR_REQUIRE
} from '../../shared/utils/validators';

import { useForm } from '../../shared/utils/form-hook';
import Input from '../../components/Form/Input';
import Button from '../../components/Button/Button';
import Auth from './Auth';

const Log = (props) => {
   const navigate = useNavigate();
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState([]);

   const [formState, inputHandler, setFormData] = useForm(
      {
         username: {
            value: '',
            isValid: false
         },
         password: {
            value: '',
            isValid: false
         },
         email: {
            value: '',
            isValid: false
         }
      },
      false
   );

   const submitHandler = async (event) => {
      event.preventDefault();
      console.log(formState.inputs);
      const formData = {
         username: formState.inputs.username.value,
         email: formState.inputs.email.value,
         password: formState.inputs.password.value
      };
      try {
         await AuthActions.register(formData);
         console.log('here');
         navigate('/');
         window.location.reload();
      } catch (error) {
         if (error.response.data) {
            console.log(Object.values(error.response.data));
            setErrorMessage(Object.values(error.response.data));
            setError(true);
         }
      }
   };
   const errorAcceptHandler = () => {
      setError(false);
   };
   return (
      <Auth>
         <ErrorHandler
            error={error}
            onHandle={errorAcceptHandler}
            msg={errorMessage}
         />
         <form onSubmit={submitHandler}>
            <Input
               element='input'
               id='email'
               type='email'
               label='E-Mail'
               validators={[VALIDATOR_EMAIL()]}
               errorText='Please enter a valid email address.'
               onInput={inputHandler}
            />
            <Input
               element='input'
               id='username'
               type='username'
               label='Username'
               validators={[VALIDATOR_REQUIRE()]}
               errorText='Please enter a name.'
               onInput={inputHandler}
            />
            <Input
               element='input'
               id='password'
               type='password'
               label='Password'
               validators={[VALIDATOR_MINLENGTH(6)]}
               errorText='Please enter a valid password, at least 6 characters.'
               onInput={inputHandler}
            />
            <Button type='submit' disabled={!formState.isValid}>
               Signup
            </Button>
         </form>
      </Auth>
   );
};

export default Log;

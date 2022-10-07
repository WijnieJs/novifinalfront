import React, { useState } from 'react';

import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import ProductActions from '../../shared/store/ProductActions';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../shared/utils/form-hook';
import Input from '../../components/Form/Input';
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators';
import Button from '../../components/Button/Button';

const NewProduct = () => {
   const navigate = useNavigate();
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
   const [formState, inputHandler] = useForm(
      {
         title: {
            value: '',
            isValid: false
         },
         description: {
            value: '',
            isValid: false
         },
         price: {
            value: 0,
            isValid: false
         }
      },
      false
   );

   const errorAcceptHandler = () => {
      setError(false);
   };

   const addProductSubmit = async (event) => {
      event.preventDefault();
      try {
         const formData = {
            title: formState.inputs.title.value,
            description: formState.inputs.description.value,
            price: formState.inputs.price.value
         };

         await ProductActions.add(formData);
         navigate('/');
      } catch (error) {
         if (error.response.data) {
            setErrorMessage(Object.values(error.response.data));
            setError(true);
         } else {
            setErrorMessage(error.message);
            setError(true);
         }
      }
   };

   return (
      <>
         <ErrorHandler
            error={error}
            onHandle={errorAcceptHandler}
            msg={errorMessage}
         />
         <form onSubmit={addProductSubmit}>
            <Input
               element='input'
               id='title'
               type='text'
               label='Title'
               validators={[VALIDATOR_REQUIRE()]}
               errorText='Please enter a title.'
               onInput={inputHandler}
            />

            <Input
               element='input'
               id='description'
               type='text'
               label='Description'
               validators={[VALIDATOR_REQUIRE()]}
               errorText='Please enter a description'
               onInput={inputHandler}
            />
            <Input
               element='input'
               id='price'
               type='number'
               label='price'
               validators={[VALIDATOR_REQUIRE()]}
               errorText='Please enter a price'
               onInput={inputHandler}
            />
            <Button type='submit' disabled={!formState.isValid}>
               ADD
            </Button>
         </form>
      </>
   );
};

export default NewProduct;

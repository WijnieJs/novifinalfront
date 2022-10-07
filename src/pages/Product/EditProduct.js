import React, { useState, useEffect } from 'react';

import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import ProductActions from '../../shared/store/ProductActions';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../shared/utils/form-hook';
import Input from '../../components/Form/Input';
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators';
import Button from '../../components/Button/Button';
import requests from '../../shared/utils/requests';
import axios from '../../shared/api/http-common';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Auth from '../Auth/Auth';
const NewProduct = () => {
   const { withQuery } = requests;
   const navigate = useNavigate();
   const fetchUrl = withQuery(requests.fetchById, 2);
   const [error, setError] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   const [loadedProduct, setLoadedProduct] = useState();

   const [errorMessage, setErrorMessage] = useState('');
   const [formState, inputHandler, setFormData] = useForm(
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
   useEffect(() => {
      async function fetchData() {
         try {
            const responseData = await axios.get(fetchUrl);
            console.log(responseData.data);
            setLoadedProduct(responseData.data);
            console.log(loadedProduct);
            setIsLoading(false);
            setFormData(
               {
                  title: {
                     value: responseData.place.title,
                     isValid: true
                  },
                  description: {
                     value: responseData.place.description,
                     isValid: true
                  }
               },
               true
            );
         } catch (err) {}
      }
      fetchData();
   }, [fetchUrl]);

   const errorAcceptHandler = () => {
      setError(false);
   };

   const editProductSubmit = async (event) => {
      event.preventDefault();
      try {
         const formData = {
            id: loadedProduct.id,
            title: formState.inputs.title.value,
            description: formState.inputs.description.value,
            price: formState.inputs.price.value
         };

         await ProductActions.edit(formData);
         navigate('/');
      } catch (err) {
         console.log('errr');
         console.log(err);
      }
   };

   return (
      <Auth>
         <h2>Edit this Product</h2>

         <ErrorHandler
            error={error}
            onHandle={errorAcceptHandler}
            msg={errorMessage}
         />
         {isLoading && <LoadingSpinner />}
         {!isLoading && loadedProduct && (
            <form onSubmit={editProductSubmit}>
               <Input
                  element='input'
                  id='title'
                  type='text'
                  label='Title'
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText='Please enter a title.'
                  onInput={inputHandler}
                  initialValue={loadedProduct.title}
                  initialValid={true}
               />
               <Input
                  element='input'
                  id='description'
                  type='text'
                  label='Description'
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText='Please enter a title.'
                  onInput={inputHandler}
                  initialValue={loadedProduct.description}
                  initialValid={true}
               />
               <Input
                  element='input'
                  id='price'
                  type='number'
                  label='Price'
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText='Please enter a title.'
                  onInput={inputHandler}
                  initialValue={loadedProduct.price}
                  initialValid={true}
               />

               <Button type='submit' disabled={!formState.isValid}>
                  UPDATE
               </Button>
            </form>
         )}
      </Auth>
   );
};

export default NewProduct;

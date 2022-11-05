import React, { useState } from 'react';

import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import ProductActions from '../../shared/store/ProductActions';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../shared/utils/form-hook';
import Input from '../../components/Form/Input';
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators';
import Button from '../../components/Button/Button';
import Auth from '../Auth/Auth';
import ImageUpload from '../../components/Form/ImageUpload';
import axios from 'axios';
const NewProduct = () => {
   const navigate = useNavigate();
   const [file, setFile] = useState();
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
         },
         image: {
            value: null,
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
      const imageUrl = formState.inputs.image.value;
      const sending = {
         name: imageUrl.name,
         type: imageUrl.type
      };

      const data = new FormData();
      data.append('image', formState.inputs.image.value);
      data.append('title', formState.inputs.title.value);
      data.append('description', formState.inputs.description.value);
      data.append('price', formState.inputs.price.value);

      try {
         const result = await axios.post(
            'http://localhost:8080/api/public/newproduct',
            data,
            {
               headers: {
                  'Content-Type': 'multipart/form-data'
               }
            }
         );
         console.log(result.data);

         // const formData = {
         //    title: formState.inputs.title.value,
         //    description: formState.inputs.description.value,
         //    price: formState.inputs.price.value,
         //    imageURL: sending
         // };

         // await ProductActions.add(data);
         // navigate('/');
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
      <Auth>
         <h2>Add a new Product</h2>
         <ErrorHandler
            error={error}
            onHandle={errorAcceptHandler}
            msg={errorMessage}
         />
         {formState.inputs.image &&
            console.log(formState.inputs.image.value)}

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
            <ImageUpload
               id='image'
               onInput={inputHandler}
               errorText='Please provide an image.'
            />
            <Button type='submit' disabled={!formState.isValid}>
               ADD
            </Button>
         </form>
      </Auth>
   );
};

export default NewProduct;

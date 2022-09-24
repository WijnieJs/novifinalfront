import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ErrorModal from '../../components/UI-interfaces/ErrorModal'
import axios from 'axios'
import Button from '../../components/Forms/Button'
import Input from '../../components/Forms/Input'
<<<<<<< HEAD
=======

>>>>>>> copyone
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../utils/validators'

import { useForm } from '../../utils/Hooks/form-hook'
import ProductContext from '../../utils/context/products-context'
import './ProductForm.css'
<<<<<<< HEAD
import { addProduct } from '../../utils/Context/product/ProductAction'
import { ProductContext } from '../../utils/Context/product/ProductContext'
import { useHttpClient } from '../../utils/hooks/http-hook'
=======
// import { addProduct } from '../../utils/Context/product/ProductAction'

// {
//     "title" : "into postman",
//     "description" : "for a new ",
//     "published" : true,
//     "price" : 11.2
// }
>>>>>>> copyone

const NewProduct = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient()
  const products = useContext(ProductContext)
  const [errorMsg, setErrorMsg] = useState()

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      publised: {
        value: '',
        isValid: false,
      },
      price: {
        value: '',
        isValid: false,
      },
    },
    false,
  )
  const history = useHistory()
  const data = {
    title: formState.inputs.title.value,
    description: formState.inputs.description.value,
    price: formState.inputs.price.value,
    publised: formState.inputs.publised.value,
  }
  const productSubmitHandler = async (e) => {
    e.preventDefault()
    dispatch({ type: 'SET_LOADING' }, true)

    const data = {
      title: formState.inputs.title.value,
      description: formState.inputs.description.value,
      price: formState.inputs.price.value,
      publised: formState.inputs.publised.value,
    }
<<<<<<< HEAD
    dispatch({ type: 'SET_ERROR' }, false)

    try {
      const response = await addProduct(data)
=======
    let response
    try {
>>>>>>> copyone
      let msg = response
      // console.log(response)

      if (response.response.status === 400 || 404) {
        msg = response.response.data
        // console.log(msg)
      }
    } catch (err) {}
  }

  return (
    <React.Fragment>
<<<<<<< HEAD
      <ErrorModal error={errorMsg} onClear={clearError} />

=======
>>>>>>> copyone
      <form className="product-form" onSubmit={productSubmitHandler}>
        {/* {isLoading && <LoadingSpinner asOverlay />} */}
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />

        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters)."
          onInput={inputHandler}
        />

        <Input
          id="published"
          element="input"
          label="publised"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid address."
          onInput={inputHandler}
        />

        <Input
          type="number"
          element="input"
          label="Enter a price"
          errorText="Please enter a price"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
        />
        {/* <ImageUpload
          id="image"
          onInput={inputHandler}
          errorText="Please provide an image."
        /> */}
        <Button type="submit">ADD PRODUCT</Button>
      </form>
    </React.Fragment>
  )
}

export default NewProduct

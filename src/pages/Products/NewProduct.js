import React, { useContext, useState } from 'react'
import Button from '../../components/Forms/Button'
import Input from '../../components/Forms/Input'

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../utils/validators'

import { useForm } from '../../utils/Hooks/form-hook'
import ProductContext from '../../utils/context/products-context'
import './ProductForm.css'
// import { addProduct } from '../../utils/Context/product/ProductAction'

// {
//     "title" : "into postman",
//     "description" : "for a new ",
//     "published" : true,
//     "price" : 11.2
// }

const NewProduct = () => {
  const { products, loading, error, repos, dispatch } = useContext(
    ProductContext,
  )

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
        value: Number,
        isValid: false,
      },
    },
    false,
  )

  const productSubmitHandler = async (e) => {
    e.preventDefault()
    dispatch({ type: 'SET_LOADING' }, true)

    const data = {
      title: formState.inputs.title.value,
      description: formState.inputs.description.value,
      price: formState.inputs.price.value,
      publised: formState.inputs.publised.value,
    }
    let response
    try {
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

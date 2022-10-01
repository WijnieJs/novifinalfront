import React, { useContext, useState } from 'react'
import Button from '../../components/Forms/Button'
import Input from '../../components/Forms/Input'

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../utils/validators'

import { ADD_PRODUCT } from '../../utils/context/types'
import { useForm } from '../../utils/Hooks/form-hook'
import ProductContext from '../../utils/context/product/productContext'
import './ProductForm.css'
// import { addProduct } from '../../utils/Context/product/ProductAction'

// {
//     "title" : "into postman",
//     "description" : "for a new ",
//     "published" : true,
//     "price" : 11.2
// }
const NewProduct = () => {
  const { dispatch } = useContext(ProductContext)
  const [httpError, setHttpError] = useState()

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
      published: {
        value: false,
        isValid: false,
      },
      price: {
        value: Number,
        isValid: false,
      },
      image: {
        value: '',
        isValid: false,
      },
    },
    false,
  )
  const productSubmitHandler = async (e) => {
    e.preventDefault()
    // dispatch({
    //   type: 'ADD_PRODUCT',
    //   title: formState.inputs.title.value,
    //   description: formState.inputs.description.value,
    //   published: formState.inputs.published.value,
    //   price: formState.inputs.price.value,
    //   image: formState.inputs.image.value,
    // })

    // const data = {
    //   title: formState.inputs.title.value,
    //   description: formState.inputs.description.value,
    //   published: formState.inputs.published.value,
    //   price: formState.inputs.price.value,
    //   image: formState.inputs.image.value,
    // }

    // const response = await addProduct(data)
    // if (response.status === 200) {
    //   console.log(response.data.message)
    //   setHttpError(response.data.message)
    // }
    // if (
    //   response.name === 'AxiosError' ||
    //   response.status === 401 ||
    //   response.status === 400
    // ) {
    //   console.log(response.response.data)
    //   setHttpError(response.response.data.message)
    // }

    console.log('response')
  }

  return (
    <React.Fragment>
      <form className="product-form" onSubmit={productSubmitHandler}>
        {/* {isLoading && <LoadingSpinner asOverlay />} */}
        {httpError}
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
          type="select"
          element="select"
          label="Publish the item?"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Make another choice "
          onInput={inputHandler}
        />
        <Input
          id="price"
          element="number"
          label="price"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please only Digits."
          onInput={inputHandler}
        />

        <Input
          id="image"
          element="input"
          label="image"
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

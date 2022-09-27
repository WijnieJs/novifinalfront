import React, { useState } from 'react'

import Input from '../../components/Forms/Input'
import { useForm } from '../../utils/Hooks/form-hook'
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../utils/validators'
import Button from '../../components/Forms/Button'
import Card from '../../components/UI-interfaces/Card'
import classes from './Auth.module.css'

const Login = () => {
  const [auth, setAuth] = useState(true)
  const [loading, setLoading] = useState(true)
  const [isLoginMode, setIsLoginMode] = useState(true)

  const [formState, inputHandler, setFormData] = useForm(
    {
      username: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false,
  )
  const authSubmitHandler = async (event) => {
    event.preventDefault()

    if (isLoginMode) {
      console.log(formState)
      console.log('Login Mode')
    } else {
      console.log(formState)
      console.log('SIgnupp Mode')
    }
  }

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          email: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid,
      )
    } else {
      setFormData(
        {
          ...formState.inputs,
          email: {
            value: '',
            isValid: false,
          },
          username: {
            value: '',
            isValid: false,
          },
        },
        false,
      )
    }
    setIsLoginMode((prevMode) => !prevMode)
  }

  return (
    <React.Fragment>
      <Card className={classes.authForm}>
        <form onSubmit={authSubmitHandler} className={classes.authForm}>
          <Input
            id="username"
            element="input"
            type="text"
            label="Username"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
          />
          {!isLoginMode && (
            <Input
              id="email"
              element="input"
              type="email"
              label="Email"
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please enter a email address."
              onInput={inputHandler}
            />
          )}
          <Input
            id="password"
            element="input"
            type="password"
            label="password"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please choose a password"
            onInput={inputHandler}
          />
          <Button
            design="accent"
            mode="raised"
            type="submit"
            disabled={!formState.isValid}
          >
            {isLoginMode ? 'LOGIN' : 'SIGNUP'}
          </Button>
        </form>
        <Button mode="raised" onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
        </Button>
      </Card>
    </React.Fragment>
  )
}

export default Login

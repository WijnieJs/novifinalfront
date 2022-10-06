import { useState, useRef, useContext } from 'react';
import axios from '../../shared/api/http-common';
import requests from '../../shared/utils/requests';

let fetchUrl = requests.signUp;


const Auth = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const emailInputRef = useRef();



  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredemail = emailInputRef.current.value;
    const enteredusername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    console.log(enteredusername)
    console.log(enteredemail)
    const formData = {
      username: enteredusername,
      email: enteredemail,
      password: enteredPassword
    }
    const result = await axios.post('http://localhost:8080/api/auth/signup', formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      })


    console.log(result);
    // setIsLoading(true);



  };



  return (
    <div>
      <h1> Sign Up</h1>
      <form onSubmit={submitHandler}>
        <div className="form-controll">

          <div className='control'>
            <label htmlFor='email'>Your Username</label>

            <input
              type="text"
              id="username"
              required
              ref={usernameInputRef} />
          </div>


          <div className='control'>
            <label htmlFor='email'>Your Email</label>

            <input
              type="text"
              id="username"
              required
              ref={emailInputRef} />
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
}

export default Auth;

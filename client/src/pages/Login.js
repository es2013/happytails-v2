import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";

function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  console.log('Login.js inside Login function');

  return (
    <div className="container my-1">
      <Link className="login-signup-toggle" to="/signup">
        ← Go to Signup
      </Link>

      <h2>Login</h2>
      
      <div className="row">
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label className="email input-title-primary" htmlFor="email">Email address:</label>
            <input
              className="input"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label className="password input-title-secondary" htmlFor="pwd">Password:</label>
            <input
              className="input"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {
            error ? <div>
              <p className="error-text" >The provided credentials are incorrect</p>
            </div> : null
          }
          <div className="flex-row flex-end">
            <button className="btn" type="submit">
              Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Login;

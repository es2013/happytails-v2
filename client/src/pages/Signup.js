
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../utils/GlobalState';
function Signup() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  const { setToken } = useAuth();
  const history = useHistory();
  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName
        }
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
      setToken(token);
      history.push('./dashboard')
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
  return (
    <div className="container my-1 btn-signup ">
      <Link className="login-signup-toggle" to="/login">
        ← Go to Login
      </Link>
      <h2>Signup</h2>
      <div className="row">
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label className="input-title-secondary" htmlFor="firstName">
              First Name:
            </label>
            <input
              className="input"
              placeholder="First"
              name="firstName"
              type="text"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label className="input-title-secondary" htmlFor="lastName">
              Last Name:
            </label>
            <input
              className="input"
              placeholder="Last"
              name="lastName"
              type="text"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label className="input-title-secondary" htmlFor="userName">
              Username:
            </label>
            <input
              className="input"
              placeholder="username"
              name="username"
              type="text"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label className="input-title-secondary" htmlFor="email">
              Email:
            </label>
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
            <label className="input-title-secondary" htmlFor="pwd">
              Password:
            </label>
            <input
              className="input"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
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
export default Signup;
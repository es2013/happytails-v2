import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { useAuth } from '../utils/GlobalState';
import { useHistory } from 'react-router-dom';
import erikaAndFren from '../images/erika-and-fren.png';

function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const { setIsAdmin, setToken, setCurrentUsername } = useAuth();

  // The useHistory hook gives access to the history instance that we may use to navigate.
  // Use this instead of window.location.assign('/'); in auth.js so we do not refresh
  // the page
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });

      setIsAdmin(mutationResponse.data.login.user.isAdmin);
      setCurrentUsername(mutationResponse.data.login.user.username);

      const token = mutationResponse.data.login.token;
      Auth.login(token);
      setToken(token);

      const isAdmin = mutationResponse.data.login.user.isAdmin;
      const isActive = mutationResponse.data.login.user.isActive;

      // The useHistory hook gives access to the history instance that we may
      // use to navigate. Use this instead of window.location.assign('/');
      // in auth.js so we do not refresh the page

      if (!isActive) {
        alert('Your user status is Inactive!');
        history.push('/logout');
      }

      if (isAdmin) {
        history.push('/admin-dashboard');
      } else {
        history.push('/dashboard');
      }
    } catch (e) {
      console.log('Login Error: ', e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section>
      <div className="login-container container my-1">
        <div className="content-wrap">
          <Link className="login-signup-toggle" to="/signup">
            ← Go to Signup
          </Link>

          <h2>Login</h2>

          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}

          <div className="row">
            <form onSubmit={handleFormSubmit}>
              <div className="flex-row space-between my-2">
                <label className="email input-title-primary" htmlFor="email">
                  Email address:
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
                <label className="password input-title-secondary" htmlFor="pwd">
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
          <div className="row">
            <div className="col s12 m center">
              <img className="happy-doggo image-border" src={erikaAndFren}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

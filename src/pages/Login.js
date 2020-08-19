import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';

import AlertContext from '../context/alert/alertContext';
import AuthContext from '../context/auth/authContext';

import './Login.css';

const Login = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { login, error, isAuthenticated, clearErrors } = authContext;
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState({
    name: '',
    password: '',
  });
  const { name, password } = user;

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        name,
        password,
      });
    }
  };

  return (
    <>
      <Header heading="Login Form" />
      <div className="login-form-outer container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="name">
              <p>Username:</p>
            </label>
            <input
              className="recipe-input"
              type="text"
              name="name"
              id="name"
              required
              autoFocus
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <label htmlFor="password">
              <p>Password:</p>{' '}
            </label>
            <input
              className="recipe-input"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <input
              className="recipe-submit-btn"
              type="submit"
              value="Log in!"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

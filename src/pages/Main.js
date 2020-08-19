import React, { useContext } from 'react';

import BigButton from '../components/BigButton.js';
import Loading from '../components/Loading.js';
import Dashboard from '../components/Dashboard.js';

import AuthContext from '../context/auth/authContext';

import './Main.css';

const Main = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : isAuthenticated ? (
        <Dashboard />
      ) : (
        <div className="main">
          <p className="info">
            Welcome to <span>Flavorites</span>. You can browse and look for
            recipes without login.You can add recipes or create a flavorites
            list, if you log in.
          </p>
          <div>
            <BigButton name={'Log in'} href="/login" />
            <BigButton name={'Sign up'} href="/signup" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;

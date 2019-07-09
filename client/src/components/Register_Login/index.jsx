import React from 'react';
import Button from '../util_components/Button';
import Login from './Login';

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>lorem ipsum</p>
            <Button
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyles={{ margin: '10px 0 0 0' }}
            />
          </div>
          <div className="right">
            <h2>Registered Customer</h2>
            <p>Please login if you already have an account</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;

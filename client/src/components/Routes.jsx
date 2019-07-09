import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/index.jsx';
import Layout from './hoc/Layout';
import RegisterLogin from './Register_Login';
import Register from './Register_Login/Register.jsx';
import UserDashboard from './User';
import Auth from './hoc/Auth';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/register" exact component={Auth(Register, false)} />
        <Route
          path="/register_login"
          exact
          component={Auth(RegisterLogin, false)}
        />
        <Route
          path="/user/dashboard"
          exact
          component={Auth(UserDashboard, true)}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;

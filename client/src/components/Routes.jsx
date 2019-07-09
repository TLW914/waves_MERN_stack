import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/index.jsx';
import Layout from './hoc/Layout';
import RegisterLogin from './Register_Login/Login.jsx';
import Register from './Register_Login/Register.jsx';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/register_login" exact component={RegisterLogin} />
      </Switch>
    </Layout>
  );
};

export default Routes;

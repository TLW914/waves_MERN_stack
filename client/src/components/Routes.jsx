import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/index.jsx';
import Layout from './hoc/Layout';
import RegisterLogin from './Register_Login';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register_login" exact component={RegisterLogin} />
      </Switch>
    </Layout>
  );
};

export default Routes;

import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/styles.css';
import Routes from './components/Routes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.querySelector('#root')
);

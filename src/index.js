import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import './assets/css/index.css';

ReactDOM.render((
    <BrowserRouter>
      <Route path="/" component={App}/>
    </BrowserRouter>
  ),
  document.getElementById('root')
);

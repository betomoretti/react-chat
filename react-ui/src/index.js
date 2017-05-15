import React from 'react';
import ReactDOM from 'react-dom';
import SocketWrapper from './lib/socketWrapper'
import App from './components/App';
import './assets/css/index.css';

const socketWrapper = new SocketWrapper()

ReactDOM.render((
  <App socketWrapper={ socketWrapper } />
  ),
  document.getElementById('root')
);
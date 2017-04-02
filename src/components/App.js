import React, { Component } from 'react';
import LoginForm from './LoginForm';
import '../assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React chat</h1>
        <LoginForm />
      </div>
    );
  }
}

export default App;

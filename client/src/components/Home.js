import React, { Component } from 'react';
import LoginForm from './LoginForm';
import '../assets/css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>React chat</h1>
        <LoginForm />
      </div>
    );
  }
}

export default Home;

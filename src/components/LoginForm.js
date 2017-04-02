import React, { Component } from 'react';
import '../assets/css/LoginForm.css';

class LoginForm extends Component {
  render() {
    return (
      <div className="LoginForm">
        <form method="post">
          <label htmlFor="">User:</label><br/>
          <input type="text"/><br/>
          <label htmlFor="">Password:</label><br/>
          <input type="text"/><br/>
          <input type="submit" value="Login"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;

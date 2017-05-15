import React, { Component } from 'react';
import '../assets/css/LoginForm.css';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.goToChat = this.goToChat.bind(this);
  }

  goToChat(event) {
    event.preventDefault();
    this.context.socketWrapper.addUser(this.userInput.value);
    this.context.router.history.push('/chat');
  }

  render() {
    return (
      <div className="LoginForm"  >
        <form onSubmit={this.goToChat}>
          <label htmlFor="User" >User:</label><br/>
          <input type="text" ref={(input) => this.userInput = input}/><br/>
          <input type="submit" value="Login"/>
        </form>
      </div>
    );
  }
}

LoginForm.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
  socketWrapper: PropTypes.object
};

export default LoginForm;

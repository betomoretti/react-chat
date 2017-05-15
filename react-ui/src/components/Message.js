import React, { Component } from 'react';
import '../assets/css/Message.css';

class Message extends Component {
  render() {
    return (
      <div className="message">
          <strong>{this.props.user}: </strong>
          <span>{this.props.message}</span>
      </div>
    );
  }
}

export default Message;

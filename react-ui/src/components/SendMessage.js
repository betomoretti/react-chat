import React, { Component } from 'react';
import '../assets/css/SendMessage.css';

class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.sendNewMessage = this.sendNewMessage.bind(this);
  }

  sendNewMessage(event) {
    event.preventDefault();
    this.props.handleNewMessage(this.textArea.value);
    this.textArea.value = '';
  }

  render() {
    return (
      <div className="send">
        <form onSubmit={this.sendNewMessage}>
          <textarea ref={(textArea) => this.textArea = textArea}/>
          <input type="submit" value='Send'/>
        </form>
      </div>
    );
  }
}

export default SendMessage;

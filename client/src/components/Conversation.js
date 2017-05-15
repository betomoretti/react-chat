import React, { Component } from 'react';
import Message from './Message'
import '../assets/css/Conversation.css';

class Conversation extends Component {

  render() {
    const { messages } = this.props;
    const messagesComponents = messages
      .map(({user, text}, index) => (<Message key={index} user={user} message={text}/>))

    return (<div className="conversation">{messagesComponents}</div>);
  }
}

export default Conversation;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Activity from './Activity'
import Conversation from './Conversation'
import SendMessage from './SendMessage'


import '../assets/css/Chat.css';

class Chat  extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      messages: [],
      activities: []
    }; 
  }

  componentDidMount (){
    this.context.socketWrapper.onNewMessage((newMessage) => {
      const messages = this.state.messages.concat([newMessage]);
      this.setState({ messages });
    });

    this.context.socketWrapper.onNewActivity((activity) => {
      const activities = this.state.activities.concat([activity]);
      this.setState({ activities });
    })
  }

  handleNewMessage(message) {
    const newMessage = this.context.socketWrapper.makeNewMessage(message);
    this.context.socketWrapper.sendNewMessage(newMessage);
    const messages = this.state.messages.concat([newMessage]);
    this.setState({ messages });
  }

  render() {
    const { messages, activities } = this.state;
    const activityComponents = activities
      .map((activity, index) => (<Activity key={index} activity={activity}/>))

    return (
      <section>
        <div className="row chat">
          <div className="col-md-8 main">
            <Conversation messages={messages} />
          </div>
          <div className="col-md-4 log">
            { activityComponents }
          </div>
        </div>
        <SendMessage handleNewMessage={ this.handleNewMessage.bind(this) }/>
      </section>
    );
  }
}


Chat.contextTypes = {
  socketWrapper: PropTypes.object
};

export default Chat;

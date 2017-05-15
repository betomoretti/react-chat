import React from 'react';
import '../assets/css/Activity.css';

const Activity = ({ activity }) => {
  const {user, state, numUsers} = activity;
  return (
    <p><strong>{ user }</strong> { state } the chat. { numUsers } users active. </p>
  )
};

export default Activity;
import socket from 'socket.io-client'

export default class SocketWrapper {
  constructor() {
    // const opts = { reconnection: true };
    this.socket = socket();
  }

  addUser(user) {
    this.user = user;
    this.socket.emit('add user', user);
  }

  onNewMessage(callback) {
    this.socket.on('new message', callback);
  }

  onNewActivity(callback) {
    this.socket.on('user joined', callback);
    this.socket.on('user left', callback);
  }

  makeNewMessage(text) {
    return { user: this.user, text: text };
  }

  sendNewMessage(message) {
    this.socket.emit('new message', message);
  }
}
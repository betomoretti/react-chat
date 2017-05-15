// Setup basic express server
let fs = require('fs');
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let port = process.env.PORT || 3001;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use('/', express.static(`${__dirname}/../react-ui/build`));


app.get('/**', function(req, res) {
  // res.sendFile('../react-ui/build/index.html', {root: __dirname })
  fs.readFile(`${__dirname}/../react-ui/build/index.html`, 'utf8', function(err, text){
    console.log(err)
    res.send(text);
  });
});


// Chatroom
var numUsers = 0;
var numConnections = 0;

io.on('connection', function (socket) {
  var addedUser = false;
  console.log(`Connections: ${numConnections++}`)


  // when the client emits 'new message', this listens and executes
  socket.on('new message', function (data) {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      user: socket.username,
      text: data.text
    });
  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', function (username) {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      user: socket.username,
      state: 'joined',
      numUsers: numUsers
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', function () {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', function () {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    if (addedUser) {
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        user: socket.username,
        state: 'left',
        numUsers: numUsers
      });
    }
  });
});

'use strict';

var express = require('express');
var app = express();
var Server = require('http').Server;
var server = new Server(app);

const io = require('socket.io')(server);


// __dirname is used here along with package.json.pkg.assets
// see https://github.com/zeit/pkg#config and
// https://github.com/zeit/pkg#snapshot-filesystem
app.use('/', express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

io.sockets.on('connection', function(socket) {
  console.log('Got connect!');
  socket.on('user entered', msg => {
    console.log('user entered:' + msg.user + ':' + msg.message);
    socket.emit('server response', {
      user: msg.user,
      message: "Hello " + msg.user
    });
  });
});


server.listen(8080);

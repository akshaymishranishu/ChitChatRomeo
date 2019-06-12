//index.js is a node file on back-end

var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();

//created a server which is listening at port: 4000 on localhost
var server = app.listen(4000, function(){
    console.log('listening to port: 4000');
});

//use static
app.use(express.static('public'));

//socket setup
var io = socket(server);

//listen to the cient to make a socket persistant connection with the client
io.on('connection',function(socket){
    console.log('socket connection made', socket.id);

    //Listen for chat event to be emitted by cilent (chat.js) and take the data
    socket.on('chat', function(data){

        //it emit to all the clients (including to the sender) connected with this socket
        io.emit('chat',data);
    });

    //Listen for typing event by the client
    socket.on('typing', function(data){

        //it emit to all the clients (nut not to the sender) connected with this socket
        socket.broadcast.emit('typing',data);
    });
});
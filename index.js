var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();

var server = app.listen(4000, function(){
    console.log('listening to port: 4000');
});

//use static
app.use(express.static('public'));

//socket setup
var io = socket(server);

io.on('connection',function(socket){
    console.log('socket connection made', socket.id);

    //Listen for chat event to be emitted by cilent (chat.js) and take the data
    socket.on('chat', function(data){

        //it emit the event to all the clients connected with this socket
        io.emit('chat',data);
    });
});
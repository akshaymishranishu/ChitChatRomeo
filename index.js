var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();

var server = app.listen(4000, function(){
    console.log('listening to port: 4000');
});

//use static
app.use(express.static('public'));

//socket setuo
var io = socket(server);

io.on('connection',function(socket){
    console.log('socket connection made', socket.id);
});
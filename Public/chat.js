//chat.js is node file on the front-end

//make socket connection with server
var socket = io.connect('http://localhost:4000');

//Query DOM
var message = document.getElementById('message');
handle = document.getElementById('handle');
btn = document.getElementById('send');
output = document.getElementById('output');
feedback = document.getElementById('feedback');

//listen button click event when client press the send button
btn.addEventListener('click', function(){

    //emits the data to the server
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

//listen for messagetyping event
message.addEventListener('keypress', function(){
    
    //emits the data to the server
    socket.emit('typing', handle.value);
});

//Listen for events emitted by server
socket.on('chat', function(data){
    feedback.innerHTML = "";  //after pressing the send button the message(xyz.. is typing message) will get vanished
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

//Listen for events emitted by server
socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>'
});
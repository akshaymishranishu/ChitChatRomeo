var express = require('express');

//App setup
var app = express();

app.listen(4000, function(){
    console.log('listening to port: 4000');
});

//use static
app.use(express.static('public'));
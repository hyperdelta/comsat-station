var express = require('express');
var router = require('./router/router');
var bodyParser = require('body-parser');

var app = express();


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//Router
app.use('/', router);

//server 시작
var port = process.argv[2] || 4000;
var server = require('http').Server(app).listen(port, function () {
    console.log('Example app listening on '+port)
});


// Socket.io
var io = require('socket.io')(server);

//on client connection
io.on('connection', require('./socketio/refinery'));







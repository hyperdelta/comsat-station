var express = require('express');
var router = require('./router/router');
var bodyParser = require('body-parser');

var app = express();


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.use('/', router);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/admin/admin.html'));
});

var server = require('http').Server(app);

// Socket.io
var io = require('socket.io')(server);

// Rethinkdb
var r = require('rethinkdb');

// Socket.io changefeed events
var changefeedSocketEvents = require('./changefeedSocketEvents.js');

//rethink - io connection setting
r.connect({ db: 'comsat_station' })
    .then(function(connection) {
      console.log(connection);
        io.on('connection', function (socket) {

            // insert new todos
            socket.on('todo:client:insert', function(todo) {
                r.table('cs_test').insert(todo).run(connection);
            });

            // update todo
            socket.on('todo:client:update', function(todo) {
                var id = todo.id;
                delete todo.id;
                r.table('cs_test').get(id).update(todo).run(connection);
            });

            // delete todo
            socket.on('todo:client:delete', function(todo) {
                var id = todo.id;
                delete todo.id;
                r.table('cs_test').get(id).delete().run(connection);
            });

            // emit events for changes to todos
             r.table('cs_test').changes({ includeInitial: true, squash: true }).run(connection)
                 .then(changefeedSocketEvents(socket, 'todo'));
        });
        //server
        var port = process.argv[2] || 3000;

        server.listen(port, function () {
            console.log('Example app listening on '+port)
        });
    })
    .error(function(error) {
        console.log('Error connecting to RethinkDB!');
        console.log(error);
    });




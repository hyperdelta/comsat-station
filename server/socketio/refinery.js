// Rethinkdb
var r = require('rethinkdb');

// Socket.io changefeed events
var changefeed = require('./changefeed.js');

//rethinkdb
var rConfig = require('../config/rethinkdb');
var rConnection = require('../rethinkdb/connect');

/**
 * clinet - server socket
 * @param socket
 */

module.exports = function (socket) {

    //client 에서 refinery 등록 event 발생시 rethink changefeed  등록
    socket.on('register_refinery',function(data){
        console.log('register_refinery',data);
        rConnection.connectDatabase(rConfig.comsat_station.database, function(err, connection){

            //rethink connection 성공 시
            if(!err){
                // emit events for changes to todos
                r.table('cs_test')
                    .changes({ includeInitial: true, squash: true })
                    .run(connection)
                    .then(changefeed(socket, 'todo'));
            }else{

            }
        });

    });

    //TODO connection close 시 rethink db 삭제 api 호출
    socket.on('close_connection',function(data){
        console.log('close_connection',data);
        // rConnection.connectDatabase(rConfig.comsat_station.database, function(err, connection){
        //
        //     //rethink connection 성공 시
        //     if(!err){
        //         // emit events for changes to todos
        //         r.table('cs_test')
        //             .changes({ includeInitial: true, squash: true })
        //             .run(connection)
        //             .then(changefeed(socket, 'todo'));
        //     }else{
        //
        //     }
        // });

    });


};
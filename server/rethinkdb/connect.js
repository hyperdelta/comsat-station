/**
 * rethinkdb에 연결하여 connection을 callback
 * connection error날 경우 error 리턴
 */

// Rethinkdb
var r = require('rethinkdb');

module.exports =  {

    //db연결
    connectDatabase: function(config, callback){

        r.connect(config)
            .then(function(connection) {
                callback(null, connection);
            })
            .error(function(error) {
                callback(error, null);
            });
    }
};
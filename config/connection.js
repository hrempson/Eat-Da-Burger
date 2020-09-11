var mysql = require('mysql');

var connection = mysql.createConnection( {
    host: "localhost",
    PORT: 3306,
    user: "root",
    password: "password",
    database: "burgers_DB"
});

JAWSDB_URL = 'mysql://ihip14gxncu76hnw:cvrbdsj8s8lt5nsq@w1h4cr5sb73o944p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/gth6buwxby9brkex'

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        PORT: 3306,
        host:'localhost',
        user: 'root',
        password: 'password',
        database: 'burgers_DB'
    });
};

connection.connect(function(err) {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id "+ connection.threadId);
});

module.exports = connection;
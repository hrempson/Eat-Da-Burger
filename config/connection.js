var mysql = require('mysql');

var connection = mysql.createConnection( {
    host: "localhost",
    PORT: 3306,
    user: "root",
    password: "password",
    database: "burgers_DB"
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
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
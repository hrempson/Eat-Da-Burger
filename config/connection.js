const mysql = require('mysql');

const connection = mysql.createConnection( {
    host: "localhost",
    PORT: 3306,
    user: "root",
    password: "password",
    database: "burgers_DB"
});

connection.connect(function(err) {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id "+ connection.threadId);
});

module.exports = connection;
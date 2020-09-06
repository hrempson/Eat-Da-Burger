const connection = require('./connection');
const { connect } = require('./connection');

const orm = {

selectAll(columns, tableName, cb) {
    // Select * FROM burgers
    // SELECT column FROM tableName
    connection.query("SELECT ?? FROM ??", [columns, tableName], (err, results) => {
        if (err) throw err;
        cb(results);
    });
},

insertOne(tableName, values, cb) {
    //Insert INTO tableName SET value;
    connection.query("INSERT INTO ?? SET ?", [tableName, values], (err, results) => {
        if (err) throw err;
        cb(results);
    });
},

updateOne(tableName, newValue, targetId, cb) {
    connection.query("UPDATE ?? SET ? WHERE id = ?", [tableName, newValue, targetId], (err, results) => {
        if (err) throw err;
        cb(results);
    });

}
};

module.exports = orm; 
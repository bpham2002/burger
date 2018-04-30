var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, col, val, cb) {
        var queryString = "INSERT INTO ?? WHERE ?? = ?";

        console.log(queryString);

        connection.query(queryString, [tableInput, col, val], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, val1, Col, val2, cb) {
        var queryString = "UPDATE ??";
        queryString += " SET ?";
        queryString += " WHERE ?? = ?";

        console.log(queryString);

        connection.query(queryString, [table, val1, col, val2], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
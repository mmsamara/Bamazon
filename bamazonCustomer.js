var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "samara4U#123",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as ID " + connection.threadId + "\n");
    readBamazon();
});

function readBamazon() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM bamazon", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    })
}
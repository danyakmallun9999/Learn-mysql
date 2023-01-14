var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "daN00b-9999",
    database: "petani_kopi"
});

db.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
})

module.exports = db;
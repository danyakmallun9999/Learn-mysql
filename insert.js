const db = require("./db_config");

const sql = `INSERT INTO customers (name, address) VALUES ('Akmallun', 'Mayong Lor')`;

db.query(sql, function(err,result){
    if (err) throw err;
    console.log("1 user telah ditambahkan!");
})
const db = require("./db_config");

// kita akan hapus data id terakhir
const sql = `DELETE FROM customers WHERE id = 18`;

db.query(sql, function(err, result){
    if (err) throw err;
    console.log(`Number of records inserted: ${result.affectedRows}`);
})
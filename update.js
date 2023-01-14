const db = require("./db_config");

// kita akan mengubah alamat dany akmallun niam
const sql = `UPDATE customers
    SET address = 'Lem lantai 1'
    WHERE id = 1
`;

db.query(sql, function(err, result){
    if (err) throw err;
    console.log(`Number of records inserted ${result.affectedRows}`);
})
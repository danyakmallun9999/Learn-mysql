const db = require("./db_config");

const sql = "SELECT name,address FROM customers ORDER BY name LIMIT 15,5";

db.query(sql, function(err, result){
    if (err) throw err;
    console.log(`NAME \t\t\t\t ADDRESS`);
    console.log(`----------------------------------------------------`);
    result.forEach((customer) => {
        console.log(`${customer.name} \t\t ${customer.address}`)
    });
});
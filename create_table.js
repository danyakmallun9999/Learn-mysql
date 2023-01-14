const db = require("./db_config");

const sql = `CREATE TABLE customers
    (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100),
        address VARCHAR(100),
        PRIMARY KEY (id)
    ) ENGINE = InnoDB;
`;

db.query(sql, function (err, result){
    if (err) throw err;
    console.log("table created!");
})
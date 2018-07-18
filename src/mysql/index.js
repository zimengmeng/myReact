const mysql = require("mysql");
let getConnection = () => {
    let connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "1601M"
    });
    return connection;
}
//查找
let select = (sql, query) => {
    let connection = getConnection();
    return new Promise((resolve, reject) => {
        connection.query(sql, query, (err, info) => {
            if (!err) {
                resolve(info)
            }
        });
    })

}

//增加
let insert = (sql, query) => {
    let connection = getConnection();
    return new Promise((resolve, reject) => {
        connection.query(sql, query, (err) => {
            if (!err) {
                resolve({ msg: "ok" })
            }
        })
    })
}

module.exports = {
    select, insert
}
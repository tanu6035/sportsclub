const mysql = require("mysql")

/* DB Connection */
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "system",
    database: "sport",
    // port: 3308
})

connection.connect((error) => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("DB Connected.")
    }
})

module.exports = connection;
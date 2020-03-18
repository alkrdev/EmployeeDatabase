const express = require("express");
const mysql = require("mysql");
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();

const connection = mysql.createConnection({
    host: "HOST",
    user: "USER",
    password: "PASSWORD",
    database: "DATABASE"
})

connection.connect()
app.use(cors())

require('./routes/routes.js')(app, connection);


app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON ${PORT}`)
})
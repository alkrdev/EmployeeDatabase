const express = require("express");
const mysql = require("mysql");
const PORT = process.env.PORT || 3000;
const app = express();

const connection = mysql.createConnection({
    host: "HOST",
    user: "USER",
    password: "PASSWORD",
    database: "DATABASE"
})

connection.connect()

require('./routes/routes.js')(app, connection);

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost/KKEmployees/showcase/");
    res.header('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT");
    next();
}
app.use(allowCrossDomain)

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON ${PORT}`)
})
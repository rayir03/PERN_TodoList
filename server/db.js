const Pool = require("pg").Pool;
require("dotenv").config()


const pool = new Pool({
    user: "postgres",
    password: process.env.REACT_APP_PASS,
    host: "localhost",
    port: process.env.REACT_APP_PORT,
    database: process.env.REACT_APP_DB
})

module.exports = pool;
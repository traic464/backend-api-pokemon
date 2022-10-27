const {Pool, Client} = require('pg')

const pool = new Pool({
user: "postgres",
host: "containers-us-west-88.railway.app",
database: "railway",
password: "UYAEAXc6OjffHuYH7dJI",
port: 6358
})

module.exports = pool;
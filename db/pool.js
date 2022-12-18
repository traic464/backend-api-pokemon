const {Pool, Client} = require('pg')

const pool = new Pool({
connectionString : "postgres://fizmaorh:NSnVU49RQyesHP5oXPxvV3Wq6OHceWQ-@mouse.db.elephantsql.com/fizmaorh"
})

module.exports = pool;
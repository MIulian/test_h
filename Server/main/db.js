const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydata',
  password: 'iulian89',
  post: 5432
})

module.exports = pool

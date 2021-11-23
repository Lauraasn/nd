const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', //user-prjnd
    host: 'localhost',
    database: 'prjnd',
    password: 'postgres', //user-prjnd
    port: 5432
    //ou 3245
})

/* 
Conexão heroku - via pool de conexões

const pool = new Pool({
    connectingString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})
*/

module.exports = pool;
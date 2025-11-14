const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'D2_92604_Shravani',
    password: 'manager',
    database: 'hackathon'
})

module.exports = pool
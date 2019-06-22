import connection from '../database/connection'


const sql = `DROP TABLE users`


connection({sql, values:[] }).then(result => {
    console.log('Database :', result)
})




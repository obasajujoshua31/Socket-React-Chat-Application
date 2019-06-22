import connection from '../database/connection'
import {Results} from '../database/query'

const sql = `
  INSERT INTO users (username, email, password)
  VALUES(?, ?, ?)
`
    const values =  ['daiveeee', 'loverman', 'josh@example.com']

connection({sql, values }).then((result: Results) => {
    return connection({sql: 'SELECT * FROM users WHERE user_id = ?', values: [result.insertId]}).then((response) => {
        console.log('---------', response)
    })
})




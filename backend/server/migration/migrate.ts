import connection from '../database/connection'


const sql = `CREATE TABLE users (
    user_id varchar(255) NOT NULL PRIMARY KEY ,
    name varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    imageURL varchar(255),
    interest varchar(255),
    email varchar(100) NOT NULL UNIQUE)`


connection({sql, values:[] }).then(result => {
    console.log('Database :', result)
})




import connection from '../database/connection'


const sql = `CREATE TABLE chat_peers (
    chat_peer_id varchar(255) NOT NULL PRIMARY KEY ,
    sender_id varchar(255) NOT NULL,
    receiver_id varchar(255) NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY fk_chat_peer_1(sender_id) REFERENCES users(user_id),
    FOREIGN KEY fk_chat_peer_2(receiver_id) REFERENCES users(user_id)
    )
    `


connection({ sql, values: [] }).then(result => {
    console.log('Database :', result)
})




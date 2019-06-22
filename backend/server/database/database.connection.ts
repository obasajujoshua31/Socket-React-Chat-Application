import * as mysql from 'mysql'
import * as dotenv from 'dotenv'

dotenv.config()


const Pool = mysql.createPool({
   host: process.env.DB_HOST,
   port: Number(process.env.DB_PORT),
   user: process.env.DB_USERNAME,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME
})


export default Pool;

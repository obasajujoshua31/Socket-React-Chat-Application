import Pool from '../database/database.connection'
import Query from './query'

const getResponse = (query: Query) => {
    return new Promise((resolve: any, reject: any) => {
        Pool.getConnection((err: Error, connection: any) => {
            return connection.query({
                sql: query.sql,
                values: query.values || []
            } 
                , (err: Error, results: any, fields: any): void => {
                    if(err) {
                      reject(err)
                    }
                    resolve(results)
                    connection.destroy()
                })
        })
    })
}


export default getResponse



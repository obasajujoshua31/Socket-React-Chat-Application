import User, {Search, UpdateBio} from './user.interface'
import * as uuid from 'uuid'
import connection from '../database/connection';




class UserService { 
    public findUsers = async () => {
        try {
           const sql = 'SELECT * FROM users'
           const foundUsers: any = await connection({sql, values: []})
            return foundUsers;
        } catch(error){
            throw error
        }
    }

    public findUser = async (search: Search) => {
        try {
            const sql = `SELECT * FROM users WHERE ${search.where} = '${search.value}';`
            const foundUser: any = await connection({sql, values: []})
            return foundUser
        } catch(error){
            throw error
        }
    }

    public saveUser = async (user: User): Promise<string> => {
        user.user_id = uuid.v4()
        const {user_id,  email, name, password, imageURL} = user
        try {

            let sql: string
            let values: Array<any>
            if(imageURL){
                 sql = 'INSERT INTO users (user_id, name, email, password, imageURL) VALUES(?, ?, ?, ?, ?)'
                  values = [user_id, name, email, password, imageURL]
            } else {
                 sql = 'INSERT INTO users (user_id, name, email, password) VALUES(?, ?, ?, ?)'
                 values = [user_id, name, email, password]
            }
            
            await connection({sql, values})
            const newUser = await this.findUser({where: 'email', value: email})
            return newUser[0].user_id
        } catch(error){
            throw error
        }
    }

    public updateUser = async (payload: UpdateBio, userId: string): Promise<void> => {
        const {imageURL, interest } = payload
        try {   
            let sql: string
            if(imageURL && interest){
                 sql = `UPDATE users  SET imageURL = '${imageURL}', interest = ${interest} WHERE user_id = '${userId}'`
            } else if (imageURL) {
                sql = `UPDATE users  SET imageURL = '${imageURL}' WHERE user_id = '${userId}'`
            } else {
                sql = `UPDATE users  SET interest = '${interest}' WHERE user_id = '${userId}'`
            }
         await connection({sql})
         const updatedUser = await this.findUser({where: 'user_id', value: userId})
         return updatedUser
        } catch(error){
            throw error
        }

    }
} 
export default UserService;

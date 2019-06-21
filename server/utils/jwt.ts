import * as jwt from 'jsonwebtoken'
import config from '../config/config'

class Authentication {
     public generateToken (user) {
         return jwt.sign({id: user.id}, config.jwtSecret)
     }
}


export default new Authentication()

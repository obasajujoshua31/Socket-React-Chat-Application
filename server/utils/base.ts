import * as bcrypt from 'bcryptjs'
import {Response} from 'express'
import * as jwt from 'jsonwebtoken'
import config from '../config/config'

class BaseController {

    private rounds : string = bcrypt.genSaltSync()

    public hashPassword = (password: string) => {
        return bcrypt.hashSync(password, this.rounds )
    }

   public matchPassword = (password: string, dbPassword: string) => {
        return bcrypt.compareSync(password, dbPassword)
    }

    public httpResponse(res: Response, statusCode: number, message: string, data: any) {
        return res.status(statusCode).json({
            success: statusCode < 300,
            message,
            data
        })
    }
    public generateToken (user) {
        return jwt.sign({id: user.id}, config.jwtSecret)
    }

    public serverError(res: Response, error: Error){
        return res.status(500).json({
            success: true,
            message: 'Server error',
            error: error.message
        })
    }
}

export default BaseController

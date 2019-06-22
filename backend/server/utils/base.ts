import * as bcrypt from 'bcryptjs'
import {Response, Request, NextFunction} from 'express'
import * as jwt from 'jsonwebtoken'
import config from '../config/config'
import AsyncFunction from './utils.interface'

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
    public generateToken (userId: string) {
        return jwt.sign({userId: userId}, config.jwtSecret)
    }

    public serverError(res: Response, error: Error){
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        })
    }

    public verifyUser = () => {
        return this.asyncWrapper({handler: 
            async (req: Request, res: Response, next: NextFunction) => {
                const token = req.headers.authorization;
                if (typeof token === 'undefined') {
                    return this.httpResponse(res, 401, 'No authentication provided', {});
                }
                const decoded = jwt.verify(token, config.jwtSecret);
                req['user'] = decoded;
                next()
            }, 
            hasError: true
        })         
  } 

    public asyncWrapper(asyncFunction: AsyncFunction){
        return async (req: Request, res: Response, next?: NextFunction) => {
            try {
               await asyncFunction.handler(req, res, next)
            } catch(error){
                if(asyncFunction.hasError){
                    switch(error.name){
                        case 'JsonWebTokenError': {
                            return this.httpResponse(res, 401, 'Authentication Failed', {})
                        }
                        default: return this.serverError(res, error)
                    }
                }
                return this.serverError(res, error) 
            }
        }
    }
}

export default BaseController

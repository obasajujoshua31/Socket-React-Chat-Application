import User from './user.interface'
import {Request, Response} from 'express'
import 'reflect-metadata'
import UserService from './user.service';
import BaseController from '../utils/base'

const userService = new UserService();


export default class UserController extends BaseController {
    public  getAllUsers = async (req: Request, res: Response) =>  {
        const users = await userService.findUsers()
        return this.httpResponse(res, 200, 'Users retrieved successfully', users)
    }

    public renderNotFoundPage = (req: Request, res: Response) => {
        return this.httpResponse(res, 404, 'End point is not found', {})
    }

    public  registerUser = async (req: Request, res: Response) =>  {
        const {email, password, name} = req.body;

        try {
            const foundUser = await userService.findUser(email)
            if(!foundUser.length){
                 const user: User = {
                email,
                password: this.hashPassword(password),
                name
            }
            const newUser = await userService.saveUser(user)
            const token = this.generateToken(newUser)
            return this.httpResponse(res, 201, 'User signed up successfully', {token})
            }

            return this.httpResponse(res, 400, 'Email is not available', {})

        } catch(error){
            return this.serverError(res, error)
        }
    }

    public loginUser = async (req: Request, res: Response) => {
        const {email, password } = req.body

        const foundUser = await userService.findUser(email)
        if(foundUser.length){
            if(this.matchPassword(password, foundUser[0].password)){
                const token = this.generateToken(foundUser[0])
                return this.httpResponse(res, 200, 'User signed in successfully', {data: token})
            }
            return this.httpResponse(res, 401, 'Invalid login Credentials', {})
        }
        return this.httpResponse(res, 401, 'Invalid login Credentials', {})
    }
}


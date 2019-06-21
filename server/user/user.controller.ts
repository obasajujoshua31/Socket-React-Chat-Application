import User from './user.interface'
import {Request, Response} from 'express'
import 'reflect-metadata'
import UserService from './user.service';
import Authentication from '../utils/jwt'

const userService = new UserService();


export default class UserController {
    constructor(){
     this.getAllUsers = this.getAllUsers.bind(this)

    }
    
    public async getAllUsers(req: Request, res: Response) {
        return res.send(await    userService.findUsers())
    }

    public renderNotFoundPage(req: Request, res: Response){
        return res.status(404).json({
            success: false,
            message: 'End point is not found'
        })
    }

    public async registerUser(req: Request, res: Response) {
        const {email, password, name} = req.body;


        try {
            const foundUser = await userService.findUser(email)
            if(!foundUser.length){
                 const user: User = {
                email,
                password,
                name
            }
            const newUser = await userService.saveUser(user)
            const token = Authentication.generateToken(newUser)
            return res.status(201).json({
                success: true, 
                data: newUser,
                token
            })
            }
           return res.status(400).json({
               success: false,
               message: 'Email is not available' 
           })
        } catch(error){
            return res.status(500).json({
                message: 'Server Error',
                success: false
            })
        }
    }
}


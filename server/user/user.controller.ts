import User from './user.interface'
import {Request, Response} from 'express'
import 'reflect-metadata'
import UserService from './user.service';

const userService = new UserService();


export default class UserController {
    constructor(){
     this.getAllUsers = this.getAllUsers.bind(this)

    }
    private users: User[] = [
        {
            email: 'obasajujoshua31@gmail.com',
            password: 'electrical',
            name: 'Joshua Obasaju'
        }
    ]
    public getAllUsers(req: Request, res: Response) {
        return res.send(this.users)
    }


    public async registerUser(req: Request, res: Response) {
        const {email, password, name} = req.body;
        try {
            const user: User = {
                email,
                password,
                name
            }
            const newUser = await userService.saveUser(user)
            return res.status(201).json({
                success: true, 
                data: newUser
            })
        } catch(error){
            return res.status(500).json({
                message: 'Server Error',
                success: false
            })
        }
    }
}


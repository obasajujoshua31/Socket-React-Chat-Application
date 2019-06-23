
import User, {UpdateBio} from './user.interface'
import {Request, Response, NextFunction, RequestParamHandler, RequestHandler} from 'express'
import 'reflect-metadata'
import UserService from './user.service';
import BaseController from '../utils/base'
import * as passport from 'passport'

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
            const foundUser = await userService.findUser({where: 'email', value: email})

            if(!foundUser.length){
                 const user: User = {
                email,
                password: this.hashPassword(password),
                name
            }
            const userId = await userService.saveUser(user)
            const token = this.generateToken(userId)
            return this.httpResponse(res, 201, 'User signed up successfully', {token})
            }

            return this.httpResponse(res, 400, 'Email is not available', {})

        } catch(error){
            return this.serverError(res, error)
        }
    }

    public loginUser = async (req: Request, res: Response) => {
        const {email, password } = req.body

        const foundUser = await userService.findUser({where: 'email', value: email})
        if(foundUser.length){
            if(this.matchPassword(password, foundUser[0].password)){
                const token = this.generateToken(foundUser[0].user_id)
                return this.httpResponse(res, 200, 'User signed in successfully', {token})
            }
            return this.httpResponse(res, 401, 'Invalid login Credentials', {})
        }
        return this.httpResponse(res, 401, 'Invalid login Credentials', {})
    }

    public authenticateUser(){
       return this.verifyUser()
    }

    public updateUserProfile = () => {
        return this.asyncWrapper({
            handler: async (req: Request, res: Response) => {
                const user = req['user']
                const userId = user.userId 
                const {imageURL, interest} = req.body;
                const updateBio: UpdateBio = {
                    imageURL,
                    interest
                }
                const updatedUser = await userService.updateUser(updateBio, userId)
                return this.httpResponse(res, 200, 'User profile updated successfully', updatedUser)
            }
        })
      
    }


    public googleLogin = () : RequestHandler => {
           return passport.authenticate('google', {
                scope: ['profile', 'email']
            })
    }

    public googleLoginRedirect = (): RequestHandler  => {
        return passport.authenticate('google', {
            session: false
        })     
    }

    public facebookLogin = () : RequestHandler => {
        return passport.authenticate('facebook')
 }

 public facebookLoginRedirect = (): RequestHandler  => {
     return passport.authenticate('facebook', {
         session: false
     })     
 }

    public socialUser = (req: Request, res: Response, next: NextFunction) => {
        return res.redirect(301, `http://localhost:3000/social-auth?token=${req.user.token}`)
    }
}


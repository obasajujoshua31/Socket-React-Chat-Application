import {Router} from 'express'
import UserControler from '../user/user.controller'

const userController = new UserControler()

class UserRoutes {
    public users: string = '/users';
    public register: string = '/register';
    public login: string = '/login';
    public update: string = '/users/update'
    public google: string = '/users/google';
    public googleCallback: string = '/users/google/callback'
    public facebook: string = '/users/facebook';
    public facebookCallback: string = '/users/facebook/callback'
    public router: Router = Router()

    constructor(){
        this.initializeControllers()
    }

    public initializeControllers(){
        this.router.get(this.users, userController.getAllUsers);
        this.router.post(this.register, userController.registerUser)
        this.router.post(this.login, userController.loginUser)
        this.router.put(this.update, userController.authenticateUser(), userController.updateUserProfile())
        this.router.get(this.google, userController.googleLogin())
        this.router.get(this.googleCallback,  userController.googleLoginRedirect(), userController.socialUser)
        this.router.get(this.facebook, userController.facebookLogin())
        this.router.get(this.facebookCallback, userController.facebookLoginRedirect(), userController.socialUser)
        this.router.all('*', userController.renderNotFoundPage)
    }
    
}

export default UserRoutes

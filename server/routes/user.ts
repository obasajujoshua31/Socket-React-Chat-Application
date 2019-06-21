import {Router} from 'express'
import UserControler from '../user/user.controller'

const userController = new UserControler()

class UserRoutes {
    public home: string = '/users';
    public register: string = '/register';
    public login: string = '/login';
    public router: Router = Router()

    constructor(){
        this.initializeControllers()
    }

    public initializeControllers(){
        this.router.get(this.home, userController.getAllUsers);
        this.router.post(this.register, userController.registerUser)
        this.router.post(this.login, userController.loginUser)
        this.router.all('*', userController.renderNotFoundPage)
        // this.router.post(this.register, userController.registerUser)
    }
    
}


export default UserRoutes

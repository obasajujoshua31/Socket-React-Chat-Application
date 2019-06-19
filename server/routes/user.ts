import {Router} from 'express'
import UserControler from '../user/user.controller'

const userController = new UserControler()

class UserRoutes {
    public home: string = '/users';
    public register: string = '/register';
    public router: Router = Router()

    constructor(){
        this.initializeControllers()
    }

    public initializeControllers(){
        this.router.get(this.home, userController.getAllUsers);
        this.router.post(this.register, userController.registerUser)
    }
    
}


export default UserRoutes

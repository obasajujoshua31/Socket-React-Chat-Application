import {getManager} from "typeorm";
import User from './user.interface'
import { UserModel } from "../entity/UserModel";


class UserService { 

    public async saveUser(user: User){
        try {
        const userRepo = await getManager().getRepository(UserModel)
        const newUser = await userRepo.create(user)
        await userRepo.save(newUser)
        return newUser
        } catch(error){
            throw error;
        }
    }
} 
export default UserService;

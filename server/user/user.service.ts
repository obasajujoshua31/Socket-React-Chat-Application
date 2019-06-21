import {getRepository, Repository} from "typeorm";
import User from './user.interface'
import { UserModel } from "./UserModel.entity";



class UserService { 

    constructor(){
        this.findUsers = this.findUsers.bind(this)
        this.findUser = this.findUser.bind(this)
        this.saveUser = this.saveUser.bind(this)
    }

    private async getUserRepo(){
        try {
            const userRepo:Repository<UserModel> = await getRepository(UserModel);
                return userRepo
        } catch(error){
            throw error
        }
    }
    public async findUsers(){
        try {
            const userRepo = await this.getUserRepo()
            const users = await userRepo.find()
            return users;
        } catch(error){
            throw error;
        }
    }

    public async findUser(email: string){

        try {
            const userRepo = await this.getUserRepo()
            return await userRepo.find({email})
        } catch(error){
            throw error
        }
    }

    public async saveUser(user: User){
        try {
            const userRepo = await this.getUserRepo()
            const newUser = await userRepo.create(user)
            await userRepo.save(newUser)
            return newUser
        } catch(error){
            throw error
        }
    }
    
} 
export default UserService;

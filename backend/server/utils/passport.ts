import {Strategy as GoogleStrategy } from 'passport-google-oauth20'
import {Application} from 'express'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import * as passport from 'passport'
import oauthConfig from '../config/passport'
import User, {userProfile} from '../user/user.interface'
import UserService from '../user/user.service'
import Base from './base'



const userService = new UserService()
const base = new Base()

const getUserProfile = (accessToken: string, refreshToken: string, profile: userProfile, cb: any)  =>  {
    process.nextTick(async () => {
        const email = profile.emails[0].value
        const foundUser = await userService.findUser({where: 'email', value: email})
        
        if(foundUser.length){
            const token = base.generateToken(foundUser[0].user_id)
            return cb(null, {token})
        }

        const user: User = {
            email,
            password: base.hashPassword('joshuaobasajufredrick'),
            name: profile.displayName,
            imageURL: profile.photos[0].value
        }
        const newUserId = await userService.saveUser(user)
        const token = base.generateToken(newUserId)
        return cb(null, {token})
    })
   
}

export default (app: Application) => {
    app.use(passport.initialize())
    passport.use(new GoogleStrategy(oauthConfig.google, getUserProfile))
    passport.use(new FacebookStrategy(oauthConfig.facebook, getUserProfile))

}



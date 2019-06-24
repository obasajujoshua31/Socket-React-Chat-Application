import {Router } from 'express'
import ChatController from '../chats/chat.controller'


const chatController = new ChatController()


export default class ChatRoutes {
    public userChats: string = '/chats:/:userId/:receiverId'
    public router: Router = Router()

    constructor(){
        this.initializeRoutes()
    }
    
    private initializeRoutes(){
        this.router.get(this.userChats, chatController.getAllChats())
    }
}

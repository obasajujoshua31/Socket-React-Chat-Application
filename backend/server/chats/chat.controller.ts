import {Request, Response} from 'express'
import ChatService from './chat.service'
import BaseController from '../utils/base';



const chatService = new ChatService()

class ChatController extends BaseController {


    public getAllChats =  () => {
       return this.asyncWrapper({
           handler: async (req: Request, res: Response) => {
                const {userId, receiverId} = req.params
                const allChats = await chatService.findUserChats({
                    userId, receiverId
                })
                return this.httpResponse(res, 200, 'Chat retrieved', allChats)
           }
       })
    }
}


export default ChatController;

import * as uuid from 'uuid'
import connection from '../database/connection'
import Chat, {NewChat} from './chat.interface'


class ChatService {

    public findUserChatPeer = async (userId: string) => {
    try {
        const sql = `SELECT * FROM  chat_peers 
        JOIN users ON users.user_id = chat_peers.sender_id OR users.user_id = chat_peers.receiver_id 
        WHERE sender_id = ${userId} OR receiver_id = ${userId}  
        `
        const foundPeers: any = await connection({ sql, values: [] })
        return foundPeers;
    } catch (error) {
        throw error
    }
    }


    public findSingleChat = async (chatId: string) => {
        const sql = `SELECT * FROM chats 
        WHERE chat_id = '${chatId}'
        `
        try {
            const foundChat: any = await connection({ sql, values: [] })
            return foundChat
        } catch(error){
            throw error
        }
    }

    public findUserChats = async (chat: Chat) => {
        const sql = `SELECT * FROM  chats WHERE sender_id = '${chat.userId}' AND receiver_id = '${chat.receiverId}' OR sender_id='${chat.receiverId}' AND 
        receiver_id = '${chat.userId}' ORDER BY date ASC`

        try {
            const foundChats: any = await connection({ sql, values: [] })
        return foundChats;
        } catch(error){
            throw error
        }
    }

    public postNewChat =  async (payload: NewChat, callback: Function) => {
        payload.chatId = uuid.v4();
        payload.date = new Date()

        const sql = `INSERT INTO chats (chat_id, message, sender_id, receiver_id, date)
        VALUES(?, ?, ?, ?, ?)
        `
        const values = [payload.chatId, payload.message, payload.senderId, payload.receiverId, payload.date]

        try {
            await connection({ sql, values })
            const newChat = await this.findSingleChat(payload.chatId)
            callback(newChat)
            
        } catch (error) {
            throw error
        }
    }
}

export default ChatService

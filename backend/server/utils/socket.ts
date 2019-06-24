import * as sockets from 'socket.io'
import {Server} from 'http'
import ChatService from '../chats/chat.service'


class SocketService extends ChatService {

    public io: any;
    public socket: any

    constructor(server: Server){
        super()
        this.io = sockets(server)
        this.startChatting()
    }

    private startChatting = () => {
        this.io.on('connection', (socket: any) => {
            console.log('Connection to Sockets established')

            this.socket = socket;
            const that = this
            this.socket.on('chat-message', (data) => {
                const {senderId, receiverId, message } = data
                    this.postNewChat({ receiverId, senderId, message }, (chat) => {
                        that.io.emit(`sendMessage-${receiverId}`, chat)
                        that.io.emit(`messageSent-${senderId}`, chat)
                    })
            })
        })
    }
}

export default SocketService

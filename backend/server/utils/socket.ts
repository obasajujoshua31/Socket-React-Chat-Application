import * as sockets from 'socket.io'
import {Server} from 'http'
import ChatService from '../chats/chat.service'


class SocketService extends ChatService {

    public io: any;

    constructor(server: Server){
        super()
        this.io = sockets(server)
        this.testConnection()
    }

    private testConnection = () => {
        this.io.on('connection', (socket: any) => {
            console.log('Connection to Sockets established')

            socket.on('chat-message', (message) => {
                console.log('Message', message)
            })
        })
    }
}

export default SocketService

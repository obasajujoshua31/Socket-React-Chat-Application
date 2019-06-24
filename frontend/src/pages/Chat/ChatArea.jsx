import React, {PureComponent} from 'react'
import authenticate from '../../utils/authenticate/auth'
import './style.css'
import * as types from '../../store/types/types'


class ChatArea extends PureComponent {

    state = {
        loggedInUserId: '',
        message: '',
        receiverId: '',
        socket: ''
    }

    componentDidMount(){

        const loggedInUserId = authenticate.userId()
        this.setState({loggedInUserId})
        this.setState({receiverId: this.props.receiverId})
    }

    handleChange = (event) => {
        this.setState({message: event.target.value})
    }

    handleClick = (event) => {
        event.preventDefault()
        const {message, loggedInUserId, receiverId} = this.state
        this.props.store.socket.emit('chat-message', {senderId: loggedInUserId, receiverId, message})
        this.setState({message: ''})
    }

    receiverMessage(){
        this.props.store.socket.on(`sendMessage-${this.state.loggedInUserId}`, (chat) => {
            this.props.store.dispatch({
                type: types.NEW_CHAT_MESSAGE,
                payload: chat
            })
        })

        this.props.store.socket.on(`messageSent-${this.state.loggedInUserId}`, (chat) => {
            this.props.store.dispatch({
                type: types.NEW_CHAT_MESSAGE,
                payload: chat
            })
        })
    }

    render(){
        if(typeof this.props.receiverId === 'undefined'){
            return null
        }
        this.receiverMessage()
        return (
        <div className=''>
                <textarea className='form-control chat-area' onChange={this.handleChange} value={this.state.message}>
                </textarea>
                <button className='mypost-button' onClick={this.handleClick} hidden={!this.state.message.length}>Send</button>
        </div>
      )
    }
}

export default ChatArea;

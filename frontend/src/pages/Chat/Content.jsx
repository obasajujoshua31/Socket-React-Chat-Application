import React, {PureComponent} from 'react'
import ReceiverContainer from './ReceiverContainer'
import {withRouter} from 'react-router-dom'
import SenderContainer from './SenderContainer'
import PageLoading from '../../components/ui/PageLoading'
import authenticate from '../../utils/authenticate/auth'
import {loadPeerChats} from '../../store/actions/chat'

class Content extends PureComponent {
        state = {
            loggedInUserId: '',
            receiverMessage: {},
            senderMessage: {}
        }

    componentDidMount(){
        this.setState({loggedInUserId: authenticate.userId()})
        loadPeerChats(authenticate.userId(), this.props.receiverId, this.props.store.dispatch)
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.id !== prevProps.match.params.id){
            loadPeerChats(authenticate.userId(), this.props.receiverId, this.props.store.dispatch)
        }
    }
  

    render(){
        if(typeof this.props.receiverId === 'undefined'){
            return null
        }

        const Display = () => {
            const {isLoading, allUsers, userChats} = this.props.store.state

            if(isLoading || allUsers.length === 0){
                return (<PageLoading/>)
            }
            
            if(userChats.length === 0) {
            return null
            }

            const receiverObject = allUsers.find(user => user.user_id === this.props.receiverId)

            return (
                userChats.map(chat => chat.isLoggedInUser ? 
                    (<
                    SenderContainer
                    key={chat.chat_id}
                    chat={chat}/>)
                : (<ReceiverContainer
                    key={chat.chat_id}
                    chat={chat}
                    receiver={receiverObject}
                />)
                )
            )
        }
        
        return (
        <div className='content-area'>
            {Display()}
        </div>)
    }
}

export default withRouter(Content)

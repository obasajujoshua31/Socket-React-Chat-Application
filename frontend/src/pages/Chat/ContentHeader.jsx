import React, {Component} from 'react'
import Loader from '../../components/ui/Loader'

class ContentHeader extends Component {

    render(){
        if(this.props.store.state.allUsers.length === 0){
            return (<div className='content-header'>
                <Loader/>
             </div>)
        }
        if(typeof this.props.receiverId === 'undefined' ){
            return (<h2 style={{display: 'flex', justifyContent: 'center'}}>Welcome {this.props.store.state.userProfile.name}!</h2>)
        }
        const receiverObject = this.props.store.state.allUsers.find(user => user.user_id === this.props.receiverId)

        return (<div className='content-header'>
            <h2>Your Chat with {receiverObject.name}</h2>
        </div>)
    }
}
    

    export default ContentHeader

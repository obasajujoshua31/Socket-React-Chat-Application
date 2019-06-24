import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import UserCard from './UserCard'
import Loader from '../../components/ui/Loader'
import authenticate from '../../utils/authenticate/auth'
import {OPEN_MODAL, CLOSE_MODAL} from '../../store/types/types'
import './style.css'

class Sidebar extends Component {
    state = {
        loading: true,
        loggedInUserId: ''
    }

    componentDidMount(){
        this.props.loadAllUsers(this.props.store.dispatch)
        const loggedInUserId = authenticate.userId()
        this.setState({loggedInUserId})
    }

    handleClick = (user_id) => {
        this.props.history.push(`/chat/${user_id}`)    
    }


    handleLoggedInProfile = () => {
        this.props.store.dispatch({
            type: OPEN_MODAL
        })
    }

    render(){
        const {allUsers } = this.props.store.state

        const Content = allUsers.length === 0 ? (<Loader/>) : (
            allUsers.filter(user => user.user_id !== this.state.loggedInUserId).map(user => 
                (
                <
                UserCard
                key={user.user_id}
                user={user}
                handleClick={this.handleClick}
                />))) 
        return (
            <div className=''>
                <div className="">
                    <div className="row">
                        <div className="col-sm-3">
                            <UserCard
                            user={this.props.store.state.userProfile}
                            handleClick={this.handleLoggedInProfile}
                            />
                            <hr></hr>
                            {Content}
                        </div>
                        <div className="col-sm-9">{this.props.children}</div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default withRouter(Sidebar)

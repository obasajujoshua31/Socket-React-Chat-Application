import React, {Component, Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import authenticate from '../../utils/authenticate/auth'
import EditProfile from '../Modals/Profile/Index'
import {OPEN_MODAL, CLOSE_MODAL} from '../../store/types/types'
import {useAlert} from 'react-alert'

import './index.css'




class Header extends Component {
     constructor(){
         super()
        //  this.configureAlert()
     }

     configureAlert = () => {
         this.alert = useAlert()
     }

    logout = (e) => {
        e.preventDefault()
        authenticate.logout()
        this.props.history.push('/')
    }

    openModal = (e) => {
        e.preventDefault()
        this.props.store.dispatch({
            type: OPEN_MODAL
        })
    }

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.props.store.dispatch({
            type: CLOSE_MODAL
        })
    }

    componentDidMount(){
        const userId = authenticate.userId()
        this.props.getUserProfile(userId, this.props.store.dispatch)
    }


    render(){
    return <div id="header" className='my-container'>
        <div id="logo">
            <h1><Link to="#">Joshua-chat</Link></h1>
        </div>
        <div id="menu">
            <ul>
                <li className="current_page_item"><Link to="/" title="">Homepage</Link></li>
                <li><Link to="#" title="">About Us</Link></li>
                <li><Link to="#" title="">Contact Us</Link></li>
                {authenticate.auth() ? 
                    (
                    <Fragment>
                            {(this.props.location.pathname) === '/' &&  (<li><Link to="/chat" title="">Your Chats</Link></li>)}
                            <li><Link to="/profile" title="" onClick={this.openModal}>Edit Profile</Link></li>
                            <li><Link to="/" title="" onClick={this.logout}>Logout</Link></li>
                    </Fragment>
                    )
                     : (<Fragment>
                        <li><Link to="/register" title="">Create Account</Link></li>
                        <li><Link to="/login" title="">Log In</Link></li>
                     </Fragment>
                     )
                     }
            </ul>
        </div>
        <EditProfile
        modalIsOpen={this.props.store.state.modalState}
        onAfterOpen={this.afterOpenModal}
        closeModal={this.closeModal}
        imageURL={this.props.store.state.userProfile.imageURL}
        dispatch={this.props.store.dispatch}
        isLoading={this.props.store.state.isLoading}
        alert={this.props.alert}
        interest={this.props.store.state.userProfile.interest}
        />
    </div>
}
}

export default withRouter(Header)

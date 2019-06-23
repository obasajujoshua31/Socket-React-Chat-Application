import React, {Component, Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import authenticate from '../../utils/authenticate/auth'
import './index.css'

class Header extends Component {
    
    logout = (e) => {
        e.preventDefault()
        authenticate.logout()
        this.props.history.push('/')
    }

    render(){
    return <div id="header" className='my-container'>
        <div id="logo">
            <h1><Link to="#">Joshua-chat</Link></h1>
        </div>
        <div id="menu">
            <ul>
                <li className="current_page_item"><Link to="/" title="">Homepage</Link></li>
                <li><Link to="#" title="">Our Clients</Link></li>
                <li><Link to="#" title="">About Us</Link></li>
                <li><Link to="#" title="">Careers</Link></li>
                <li><Link to="#" title="">Contact Us</Link></li>
                {authenticate.auth() ? 
                    (<li><Link to="/" title="" onClick={this.logout}>Logout</Link></li>)
                     : (<Fragment>
                        <li><Link to="/register" title="">Create Account</Link></li>
                        <li><Link to="/login" title="">Log In</Link></li>
                     </Fragment>
                     )
                     }
            </ul>
        </div>
    </div>
}
}

export default withRouter(Header)

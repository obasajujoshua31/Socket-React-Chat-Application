import React, {Fragment, Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import image1 from '../../assets/pic01.jpg'
import image2 from '../../assets/pic02.jpg'
import image3 from '../../assets/pic03.jpg'
import authenticate from '../../utils/authenticate/auth'
import './index.css'



 class Banner extends Component{

        handleClick = (e) => {
            e.preventDefault()
            if(authenticate.auth() === true){
                this.props.history.push('/chat')
            } else {
                this.props.history.push('/register')
            }
        }
    render(){
    return <Fragment>
            <div id="banner">
                <div className="my-container">
                    <ul className="staff">
                        <li><img src={image1} alt="" /></li>
                        <li><img src={image2} alt="" /></li>
                        <li><img src={image3} alt="" /></li>
                    </ul>
                    <div className="title">
                        <h2>This is where we chat with one another!</h2>
                        <span className="byline">Maecenas pede nisl, elementum eu, ornare ac, malesuada at, erat. Proin gravida orci porttitor accumsan.</span>
                    </div>
                    <p>Vivamus fermentum nibh in augue. Praesent a lacus at urna congue rutrum. Nulla enim eros, porttitor eu, tempus id, varius non, nibh. Duis enim nulla, luctus eu, dapibus lacinia, venenatis. Vestibulum imperdiet, magna nec eleifend rutrum lectus vestibulum velit, euismod lacinia quam nisl id lorem.</p>
                    <ul className="actions">
                        <li><Link to="/register" className="button" onClick={this.handleClick}>{authenticate.auth()? 'Continue Chatting': 'Get Started'}</Link></li>
                    </ul>
                </div>
            </div>
            <div id="page" className="container">
                <div className="title">
                    <h2>Nulla luctus eleifend</h2>
                    <span className="byline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
                </div>
                <p> Vivamus fermentum nibh in augue. Praesent a lacus at urna congue rutrum. Nulla enim eros nibh. Duis enim nulla, luctus eu, dapibus lacinia, venenatis id, quam. Vestibulum imperdiet, magna nec eleifend rutrum, nunc lectus vestibulum velit, euismod lacinia quam nisl id lorem. Quisque erat. Vestibulum pellentesque, justo mollis pretium suscipit, justo nulla blandit libero, in blandit augue justo quis nisl. Fusce mattis viverra elit. Fusce quis tortor.</p>
                <ul className="actions">
                    <li><Link to="#" className="button">Talk to Us</Link></li>
                </ul>
            </div>
        <div id="featured">
            <div className="my-container">
                <div className="title">
                    <h2>Fusce ultrices fringilla metus</h2>
                    <span className="byline">Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue</span>
                </div>
                <p>This is <strong>Soft String</strong>, a free, fully standards-compliant CSS template designed by <Link to="http://templated.co" rel="nofollow">TEMPLATED</Link>. The photos in this template are from <Link to="http://fotogrph.com/"> Fotogrph</Link>. This free template is released under the <Link to="http://templated.co/license">Creative Commons Attribution</Link> license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :) </p>
            </div>
            <ul className="actions">
                <li><Link to="#" className="button">Feedback</Link></li>
            </ul>
        </div>
        <div id="extra" className="my-container">
            <div className="title">
                <h2>Praesent scelerisquet</h2>
                <span className="byline">Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue</span>
            </div>
            <div id="three-column">
                <div className="boxA">
                    <div className="box">
                        <p>Praesent pellentesque facilisis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                    </div>
                </div>
                <div className="boxB">
                    <div className="box">
                        <p>Etiam neque. Vivamus consequat lorem at nisl. Nullam non wisi a sem semper eleifend. Donec mattis.</p>
                    </div>
                </div>
                <div className="boxC">
                    <div className="box">
                        <p> Aenean lectus lorem, imperdiet at, ultrices eget, ornare et, wisi. Pellentesque adipiscing purus.</p></div>
                </div>
            </div>
            <ul className="actions">
                <li><Link to="#" className="button">Etiam posuere</Link></li>
            </ul>
        </div>
        </Fragment>
        
    }
}

export default withRouter(Banner)

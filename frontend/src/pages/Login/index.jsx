import React, { Component } from 'react'
import Template from '../../components/ui/template'
import {Link, withRouter} from 'react-router-dom'
import FormGroup from '../../components/ui/FormGroup'
import Button from '../../components/ui/Button'
import ButtonLoading from '../../components/ui/ButtonLoading'
import SocialIcons from '../../components/ui/SocialIcons'
import Error from '../../components/ui/Error'
import AuthWrapper from '../../components/HOC/AuthWrapper'
import './index.css'

 export class Login extends Component {

    submitForm = (event) => {
        event.preventDefault()
        const {store: {dispatch}, state: {email, password}, history, loginUser} = this.props
       loginUser({email, password}, history, dispatch)

    }
    
    render () {
        return (
            <Template>
                <div className='form-wrapper'>
                    <h1>Login to Chat</h1>
                    {this.props.store.state.error && (<Error message={this.props.store.state.error}/>)}
                    <form onSubmit={this.submitForm}>
                        <FormGroup 
                            type='email' 
                            label='Email' 
                            value={this.props.state.email} 
                            name="email"
                            required={true}
                            handleChange={this.props.handleChange}
                            />
                        <FormGroup 
                            type='password' 
                            label='Password' 
                            value={this.props.state.password} 
                            name="password" 
                            required={true}
                            handleChange={this.props.handleChange}
                            />
                        <div className='auth-buttons'>
                        {this.props.store.state.isLoading ? 
                            (<ButtonLoading />) 
                            : (<Button name='Login' />)}  
                            <SocialIcons />
                        </div>
                        
                        <pre>new user? <Link to ='/register'>Sign Up</Link></pre>
                    </form>
                </div>
            </Template>
        )
    }
}

export default withRouter(AuthWrapper(Login))

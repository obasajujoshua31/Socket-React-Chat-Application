import React, {Component} from 'react'
import Template from '../../components/ui/template'
import {Link, withRouter} from 'react-router-dom'
import FormGroup from '../../components/ui/FormGroup'
import Button from '../../components/ui/Button'
import ButtonLoading from '../../components/ui/ButtonLoading'
import SocialIcons from '../../components/ui/SocialIcons'
import AuthWrapper from '../../components/HOC/AuthWrapper'
import Error from '../../components/ui/Error'
import './index.css'

export class Signup extends Component {

    submitForm = (event) => {
        const { store: {dispatch}, state: { email, password, name}, history, signUp } = this.props
        event.preventDefault()
        signUp({email, password, name}, history, dispatch)
    }

    render(){
        return (
            <Template>
                <div className='form-wrapper'>
                 <h1>Register to start Chatting</h1>
                    {this.props.store.state.error && (<Error message={this.props.store.state.error} />)}
                    <form onSubmit={this.submitForm}>
                        <FormGroup 
                            type='text' 
                            label='Name' 
                            required={true}
                            value={this.props.state.name}
                            handleChange={this.props.handleChange}
                            name='name'
                            />
                        <FormGroup 
                            type='email' 
                            label='Email' 
                            required={true}
                            value={this.props.state.email}
                            handleChange={this.props.handleChange}
                            name='email'
                            />
                        <FormGroup 
                            type='password' 
                            label='Password'
                            required={true} 
                            value={this.props.state.password}
                            handleChange={this.props.handleChange}
                            name='password'
                            />
                        <div className='auth-buttons'>
                            {this.props.store.state.isLoading ?
                                (<ButtonLoading />)
                                : (<Button name='Register' />)}  
                            <SocialIcons />
                        </div>
                        <pre>Aleady registered? <Link to='/login'>Login</Link></pre>
                </form>
                </div>
            </Template>
        )
    }
}

export default AuthWrapper(withRouter(Signup))

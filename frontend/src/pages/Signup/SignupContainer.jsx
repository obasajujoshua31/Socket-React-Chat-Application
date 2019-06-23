import React, { Component } from 'react'
import MyContext from '../../store/provider/Provider'
import SignUp from './index';
import * as actions from '../../store/actions/auth'


export class SignupContainer extends Component {
    render () {
        return (
            <MyContext.Consumer>
                {(value) => (<SignUp store={value} signUp={actions.registerUser} />)}
            </MyContext.Consumer>
        )
    }
}





import React, {Component} from 'react'
import MyContext from '../../store/provider/Provider'
import Login from './index';
import * as actions from '../../store/actions/auth'


export class LoginContainer extends Component{
    render(){
        return (
            <MyContext.Consumer>
            {(value) => (<Login store ={value} loginUser={actions.loginUser}/>)}   
       </MyContext.Consumer>
        )
    }
}





import React, {Component} from 'react'
import reducer from '../reducers/auth'
import io from 'socket.io-client'
import { API_URL } from '../../utils/constants/constants';

const socket = io(API_URL)

const MyContext = React.createContext()

 export class MyProvider extends Component {
    state = {
        isLoggedIn: false,
        error: null,
        isLoading: false,
        allUsers: [],
        modalState: false,
        userProfile: {},
        userChats: []
    }

    render(){
        return (
            <MyContext.Provider value = {{
                state: this.state,
                socket: socket,
                dispatch: (action) => this.setState(state => reducer(state, action)
                )
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}


export default MyContext

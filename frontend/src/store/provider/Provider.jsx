import React, {Component} from 'react'
import reducer from '../reducers/auth'

const MyContext = React.createContext()

 export class MyProvider extends Component {
    state = {
        isLoggedIn: false,
        error: null,
        isLoading: false
    }
    
    render(){
        return (
            <MyContext.Provider value = {{
                state: this.state,
                dispatch: (action) => this.setState(state => reducer(state, action)
                )
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}


export default MyContext

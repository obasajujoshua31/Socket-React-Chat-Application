import React, {Component} from 'react'



const AuthWrapper = (Tag) => {
    return class newComponent extends Component {

        state = {
            email: '',
            password: '',
            name: ''
        }

        handleChange = (event) => {
            const { name, value } = event.target
            this.setState({ [name]: value })
        }

        render(){
            return (
                <Tag
                state={this.state}
                handleChange={this.handleChange}
                {...this.props}
                />)
        }
    }
}

export default AuthWrapper

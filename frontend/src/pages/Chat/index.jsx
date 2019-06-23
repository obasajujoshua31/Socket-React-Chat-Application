import React, {Component} from 'react'
import Template from '../../components/ui/template'
import io from 'socket.io-client'

const socket = io('http://localhost:2001')

export class Chat extends Component {
    state= {
        message: ''
    }

    componentDidMount(){
        socket.on('connect', () => {
            console.log('Connect to socket server')
        })
    }   

    handleChange = (event) => {
        this.setState({message: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        socket.emit('chat-message', this.state.message)
    }

    render(){
        return (
        <Template>
                <div className='container my-4'>
                    <form onSubmit={this.handleSubmit}>
                        <label className='mr-2 pd-2'>Your chat</label>
                        <input type='text'
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                        <button className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
        </Template>
    )
    }
}

export default Chat

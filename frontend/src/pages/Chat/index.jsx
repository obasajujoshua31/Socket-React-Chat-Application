import React, {Component} from 'react'
import Template from '../../components/ui/template'
import Sidebar from './Sidebar'
import ContentHeader from './ContentHeader'
import Content from './Content'
import Context from '../../store/provider/Provider'
import ChatArea from './ChatArea'
import * as actions from '../../store/actions/users'
import './style.css'

export class Chat extends Component {
    state= {
        message: ''
    }

    render(){
        return (
            <Context.Consumer>
                {(value) => 
                (
                    <Template>
                        <Sidebar store={value} loadAllUsers={actions.loadAllUsers}>
                            <div className='container entire-page'>
                                <ContentHeader store={value} receiverId={this.props.match.params.id}/>
                                <hr />
                                <Content  store={value} receiverId={this.props.match.params.id}/>
                                <div className="chat-area">
                                 <ChatArea 
                                 store={value}
                                 receiverId={this.props.match.params.id} />
                                </div>
                                
                            </div>
                        </Sidebar>
                    </Template>
                )}
            </Context.Consumer>
    )
    }
}

export default Chat

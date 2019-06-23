import React, {Component} from 'react'
import Template from '../../components/ui/template'



export class SocialComponent extends Component{

    componentDidMount(){
        const query = this.props.location.search
        const split = query.split('=')
        localStorage.setItem('token', split[1])
        this.props.history.push('/chat')
    }
    render(){
        return (
            <Template>
                <div className='text-center'>
                    <h1>Verifying your account....</h1>
                </div>
            </Template>
        )
    }
}

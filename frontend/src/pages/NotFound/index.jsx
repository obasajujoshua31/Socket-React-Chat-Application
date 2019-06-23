import React, { Component } from 'react'
import Template from '../../components/ui/template'
import './index.css'

export class NotFound extends Component {
    render () {
        return (
            <Template>
                <div className='text-center'>
                    <h1>404 Not Found</h1>
                </div>
            </Template>  
       )
    }
}

export default NotFound

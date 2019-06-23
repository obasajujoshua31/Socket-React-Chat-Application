import React from 'react'
import Header from '../Header/Header'
import Copyright from '../Banner/Copyright'

const Template = (props) => {
            return (<div>
                <Header/>
                    {props.children}    
                <Copyright/>   
            </div>
            )
    }

export default Template

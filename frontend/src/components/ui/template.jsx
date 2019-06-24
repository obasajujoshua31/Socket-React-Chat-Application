import React from 'react'
import HeaderWrapper from '../Header/HeaderWrapper'
import Copyright from '../Banner/Copyright'
import './style.css'

const Template = (props) => {
            return (<div className='page-container'>
                <HeaderWrapper/>
                    {props.children}    
                {/* <Copyright/>    */}
            </div>
            )
    }

export default Template

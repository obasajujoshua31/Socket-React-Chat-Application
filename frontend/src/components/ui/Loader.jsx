import React from 'react'
import './style.css'

export default () => {
    return (
        <div className='loader'>
            <div
                className="spinner-border"
                role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
   
        )
    }

import React from 'react'
import './style.css'

export default () => {
    return (
        <div className='loader'>
            <div
                className="spinner-border"
                style={{width: "5rem", height: "5rem"}}
                role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>

    )
}

import React from 'react'



export default () => {
    return (
        <button 
            className="button" 
            type="button" 
            disabled
        >
            <span 
            className="spinner-border spinner-border-sm" 
            role="status" 
            aria-hidden="true">
            </span>
        Loading...
        </button>
    )
}

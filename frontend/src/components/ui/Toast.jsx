import React from 'react'



export default () => {
    return (
        <div className="toast" role="alert" aria-live="polite" aria-atomic="true" data-delay="10000">
            <div role="alert" aria-live="assertive" aria-atomic="true">...</div>
            <div className="toast-body">
                Hello, world! This is a toast message.
            </div>
        </div>
    )
}

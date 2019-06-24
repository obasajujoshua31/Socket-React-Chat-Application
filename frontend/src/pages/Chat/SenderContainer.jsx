import React from 'react'
import moment from 'moment'

export default ({chat}) => {
    return (
        <div className='sender-message-container'>
            <h6 className='sender-name'>You</h6>
            <p className='sender-message'>{chat.message}</p>
            <span className='date'>{moment(chat.date).format('LLLL')}</span>
        </div>
    )
}

import React from 'react'
import moment from 'moment'

export default ({chat, receiver}) => {
    return (
        <div className='receiver-message-container'>
            <h6 className='receiver-name'>{receiver.name}</h6>
            <p className='receiver-message'>{chat.message}</p>
            <span className='date'>{moment(chat.date).format('LLLL')}</span>
        </div>
    )
}

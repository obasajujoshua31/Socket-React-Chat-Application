import React from 'react'
import UserIcon from './UserIcon'

export default ({user, handleClick}) => {
    return (
        <div className='usercard-container'>
            <div
                className="user-card shadow bg-white rounded"
                onClick={() => handleClick(user.user_id)}
            >
                <UserIcon user={user} />
                <div className="user-content">
                    <h5 className="">{user.name}</h5>
                    <p>{user.email}</p>
                </div>
            </div>
        </div>
        
    )
}

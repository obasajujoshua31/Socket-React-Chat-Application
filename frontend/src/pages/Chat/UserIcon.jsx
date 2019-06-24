import React from 'react'
import userIcon from '../../assets/user.png'

export default ({user}) => {
    return (
        <div className="user-icon">
            <img src={user.imageURL || userIcon} className="card-img" alt="..." />
        </div>
    )
}

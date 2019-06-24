import React from 'react'
import './image.css'
import Icon from '../../assets/user.png'

export default ({imageURL}) => {
    return (
        <div className='image-url'>
            <img src={imageURL || Icon} alt =''/>
        </div>
    )
}

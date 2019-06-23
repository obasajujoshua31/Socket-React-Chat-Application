import React from 'react'


export default (props) => {
    return <div className='form-group'>
        <label>{props.label}: </label>
        <input 
            type={props.type} 
            className='form-control' 
            value={props.value} 
            onChange={props.handleChange} 
            name={props.name}
            required={props.required}
            />
    </div>
}

import React from 'react'



export default ({handleClick}) => {
    return (
        <button type="button" className="close" aria-label="Close" onClick={handleClick}>
        <span aria-hidden="true">&times;</span>
     </button>)
}

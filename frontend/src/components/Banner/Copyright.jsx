import React from 'react'
import {Link} from 'react-router-dom'
import './copyright.css'

export default () => {
    return <div id="copyright" className="my-container">
        <p>&copy; Obasaju Joshua. All rights reserved. | Photos by <Link to="http://fotogrph.com/">Fotogrph</Link> | Design by <Link to="http://templated.co" rel="nofollow">TEMPLATED</Link>.</p>
    </div>
}

import React from 'react'
import './Index.css'

function Header() {
    return(
        <div>
            <nav className='navbar'>
                <i className="fa fa-arrow-left"></i>
                <i className="fa fa-ellipsis-h"></i>
            </nav>

            <div className="cat-image">
                <img className="cat-image" src="https://res.cloudinary.com/aphatheology/image/upload/v1597913690/cat_w1lmes.jpg" alt="Beautiful cat" /> 
            </div>
        </div>
    )
}

export default Header
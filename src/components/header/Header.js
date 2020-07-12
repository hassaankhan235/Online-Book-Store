import React from 'react'
import './Header.css'

const Header = () => {
    return(
        <div className='header-container'>
            <h1 className='site-name'> BOOK STORE</h1>
            <ul className='left'>
            <li > <a href="#"> Sign In </a> </li>
            <li> <a href ='#'> About </a> </li>
            </ul>
        </div>
    )
}
export default Header
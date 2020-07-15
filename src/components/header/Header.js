import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import { auth } from '../../firebase/firebase.utils'

const Header = ({user}) => {
    return(
        <div className='header-container'>
            <h1 className='site-name'> BOOK STORE</h1>
            <ul className='left'>

            {user ?  
                (<div className='sign_in_out_btn' onClick={()=> auth.signOut()}> 
                    Sign Out
                     </div> ) : (
                         <Link className='sign_in_out_btn' to='/signIn'>
                        Sign In
                        </Link>)
                     }
                     
            <li> <a href ='#'> About </a> </li>
            </ul>
        </div>
    )
}
export default Header
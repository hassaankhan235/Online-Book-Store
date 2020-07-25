import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import './Header.css'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../ShoppingCart/Cart-icon'
import CartDropDown from '../ShoppingCart/CartDropDown'
import { selectCartHidden } from '../../redux/selector/cart.selector'


const Header = ({user, hidden}) => {
    return(
        <div className='header-container'>
            <h1 className='site-name'> BOOK STORE</h1>
            <ul className='left'>
            <li className='home'><Link to='/'> HOME </Link></li>

            {user ?  
                (<div className='sign_in_out_btn' onClick={()=> auth.signOut()}> 
                    SIGN OUT
                     </div> ) : (
                         <Link className='sign_in_out_btn' to='/signIn'>
                        SIGN IN
                        </Link>)
                     }
                     
            <li> <a href ='#'> ABOUT </a> </li>
            <li className='.icon'> <CartIcon /></li>
            </ul>
            {
                hidden ? null : <CartDropDown />
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
        user : state.user.user,
        hidden : selectCartHidden(state)
})

export default connect(mapStateToProps)(Header)
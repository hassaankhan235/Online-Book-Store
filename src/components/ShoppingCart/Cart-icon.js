import React from 'react'
import {ReactComponent as Cart} from './../../assets/shopping-bag.svg'

import './cart-icon.css'
import { connect } from 'react-redux'
import { ToggleDropDownAction } from '../../redux/ToggleDropDownAction'

const CartIcon = ({ToggleDropDownAction}) => (
    <div className='cart-icon' onClick= {ToggleDropDownAction}>
        <Cart className='shopping-icon'/>
        <span className= 'item-count'> 0 </span>
    </div>
)

const mapDispatchToProps =(dispatch) => ({
    ToggleDropDownAction: () => dispatch(ToggleDropDownAction())
})
export default connect(null,mapDispatchToProps)(CartIcon)



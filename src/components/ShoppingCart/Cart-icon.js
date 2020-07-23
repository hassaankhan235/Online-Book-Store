import React from 'react'

import { selectItemCount } from '../../redux/selector/cart.selector'
import { ReactComponent as Cart } from './../../assets/shopping-bag.svg'

import './cart-icon.css'
import { connect } from 'react-redux'
import { ToggleDropDownAction } from '../../redux/CartAction'

const CartIcon = ({ToggleDropDownAction, itemCount}) => (
    <div className='cart-icon' onClick= {ToggleDropDownAction}>
        <Cart className='shopping-icon'/>
        <span className= 'item-count'> {itemCount} </span>
    </div>
)

const mapDispatchToProps =(dispatch) => ({
    ToggleDropDownAction: () => dispatch(ToggleDropDownAction())
})

const mapStateToProps = (state) => ({
    itemCount: selectItemCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)



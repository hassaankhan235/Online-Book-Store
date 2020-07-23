import React from 'react'
import {  connect } from 'react-redux'

import './CartDropDown.css'
import '../cart-Item/cart-Item'
import CartItem from '../cart-Item/cart-Item'
import { selectcartItem } from '../../redux/selector/cart.selector'

const CartDropDown = ({cartItem}) => {
    return(
        <div className='drop-down'>
             <div className='items' />
             {
                 cartItem.map((cartItem) => {
                     console.log('cart', cartItem)
                    return(
                        <CartItem key = {cartItem.id} item={cartItem}/>
                    )
                 }) 
             }
             <button> CHECKOUT </button> 
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItem : selectcartItem(state)
})

export default connect(mapStateToProps)(CartDropDown);


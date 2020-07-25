import React from 'react'
import {  connect } from 'react-redux'

import './CartDropDown.css'
import '../cart-Item/cart-Item'
import CartItem from '../cart-Item/cart-Item'
import { selectcartItem } from '../../redux/selector/cart.selector'
import { withRouter } from 'react-router-dom'
import { ToggleDropDownAction } from '../../redux/CartAction'

const CartDropDown = ({cartItem, history, dispatch}) => {
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
             <button onClick={()=> {
                dispatch(ToggleDropDownAction())
                history.push('/checkout')}}>
               CHECKOUT </button> 
        </div>
    )
}
 
const mapStateToProps = (state) => ({
    cartItem : selectcartItem(state)
})

export default withRouter( connect(mapStateToProps)( CartDropDown));


import React from 'react'

import './CartItem.css'

const CartCheckOutItem = ({Item}) => {
    return(
        <div className='checkoutitems'>
        <div className='chkoutitemdetails'>
        <img className='image' src= {Item.urlImg} />
        </div>
        <span className='desc chkoutitemdetails'> {Item.title} </span>
        <span className='qty chkoutitemdetails'> {Item.quantity} </span>
        <span className='price chkoutitemdetails'> {Item.price} </span>
        <span className='remove'> X </span>
        </div>
    )
}
export default CartCheckOutItem
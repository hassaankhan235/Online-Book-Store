import React from 'react'

import './CartItem.css'
import { connect } from 'react-redux'
import { ClearCartItem } from '../../redux/CartAction'

const CartCheckOutItem = ({Item, ClearItem}) => {
    return(
        <div className='checkoutitems'>
        <div className='chkoutitemdetails'>
        <img className='image' src= {Item.urlImg} />
        </div>
        <span className='desc chkoutitemdetails'> {Item.title} </span>
        <span className='qty chkoutitemdetails'> {Item.quantity} </span>
        <span className='price chkoutitemdetails'> {Item.price} $ </span>
        <span className='remove' onClick={()=> ClearItem(Item)}> X </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
ClearItem : Item => dispatch(ClearCartItem(Item))
})

export default connect(null,mapDispatchToProps)(CartCheckOutItem) 
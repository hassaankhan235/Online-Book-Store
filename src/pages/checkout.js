import React from 'react'
import { connect } from 'react-redux'

import './checkout.css'
import { selectCartTotal, selectcartItem } from '../redux/selector/cart.selector'
import CartCheckOutItem from '../components/cart-Item/CartItem.js'


const Checkout = ({total, cartItem}) => {
    return(
        <div className='chkout'>
            <div className='chkout_header'>
                <span className='header'>
                    Product
                </span>
                <span className='header'>
                    Description
                </span>
                <span className='header'>
                    Quantity
                </span>
                <span className='header'>
                    Price
                </span>
                <br/>
                <span className='remove'>
                    Remove
                </span>
            </div>
            {
                cartItem.map(item=> <CartCheckOutItem Item= {item} />)
            }
            <span className='total'> TOTAL: {total} </span>
            </div>
    )
         
}

const mapStateToProps = state => ({
    total: selectCartTotal(state),
    cartItem: selectcartItem(state)
})

export default connect(mapStateToProps)(Checkout) 
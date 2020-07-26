import React from 'react'
import { connect } from 'react-redux'

import './checkout.css'
import { selectCartTotal, selectcartItem, selectItemCount } from '../redux/selector/cart.selector'
import CartCheckOutItem from '../components/cart-Item/CartItem.js'
import StripePayment from '../components/stripe/stripe-payment.js'


const Checkout = ({total, cartItem, totalItems}) => {
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
                totalItems ?
                cartItem.map(item=> {
                    return(
                        <CartCheckOutItem Item= {item} />
                    )
                } ) :
                <span className='empty'> Your Cart Is EMPTY </span>
            }
            <span className='total'> TOTAL: {total}$ </span>
            <StripePayment price = {total} />
            </div>
    )
         
}

const mapStateToProps = state => ({
    total: selectCartTotal(state),
    cartItem: selectcartItem(state),
    totalItems: selectItemCount(state)
})

export default connect(mapStateToProps)(Checkout) 
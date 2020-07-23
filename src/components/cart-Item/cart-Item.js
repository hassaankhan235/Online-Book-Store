import React from 'react'

import './cart-item.css'

const CartItem = ({item: {urlImg, price, title, quantity}}) => (
    <div className='cart-item'>
      <img src={urlImg} />
      <div className='item-details'>
      <span className='name'> {title} </span>
      <span className='price'> 
      {quantity}  x  ${price} 
      </span>
      </div>
    </div>
)
export default CartItem
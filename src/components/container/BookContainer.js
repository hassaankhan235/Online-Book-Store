import React from 'react'
import './BookContainer.css'

const BookContainer = ({title,price,urlImg,imgRef}) => {
    const addcart = (imgRef) => {
        console.log('IMG',imgRef)
    }

    return(
    <div className='bk-container'>
        <div style={{
            backgroundImage: 'url(' + `${urlImg}` + ')'
        }} className='bk-pic'>
        </div>        
        <div className='bk-detail'>
            <h5>{title}</h5>
            <h2 className='price'> {price} </h2> <span className='price'> $</span>
            <button className='cart-icon'>Add To Cart</button>
        </div>
    </div>
    )
}
export default BookContainer;
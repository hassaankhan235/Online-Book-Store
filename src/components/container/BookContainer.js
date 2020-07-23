import React, { Component } from 'react'
import './BookContainer.css'
import { connect } from 'react-redux';

import { addItem } from '../../redux/CartAction';



class BookContainer extends Component {
  
    prepareDispatch = () => {
        const item = {
            title : this.props.title.substr(0,40),
            price : this.props.price,
            urlImg: this.props.urlImg,
            id   : this.props.id
        }
        this.props.dispatch(addItem(item))
        return(null)
    }

    render(){
        return(
            <div className='bk-container'>
                <div style={{
                    backgroundImage: `url( ${this.props.urlImg} )`
                }} className='bk-pic'>
                </div>        
                <div className='bk-detail'>
                    <h5>{this.props.title}</h5>
                    <h2 className='price'> {this.props.price} </h2> <span className='price'> $</span>
                </div>
                <button className='addCartButton'
                    onClick={this.prepareDispatch}>Add To Cart</button>
            </div>
            )
        }
    }

export default connect()(BookContainer);
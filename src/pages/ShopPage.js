import React,{ Component } from 'react';
import axios from 'axios';
import BookContainer from '../components/container/BookContainer'
import './ShopPage.css'

// import axios from '../api/axios'

class ShopPage extends Component {
state = {
    books : [],
    rates : [20,24,22,25,30,25,25,20,22,25,30,30,30,22,25,25,25,20,30,30,30,30,30,30,25,25,25,
    25,22,22,30,30,30,30,30,25,25,25,20,20]
}

imgRef = React.createRef();

componentDidMount(){
    this.btnclick()
}

btnclick = async() => {
    const { s } = this.props.location.state.search;
    console.log('search', this.props.location.state.search, 'https://www.googleapis.com/books/v1/volumes'+`${s}`+'&key=AIzaSyDKo40H2OAbPJdF4fZcpRLDL6vV7SrJpGE&maxResults=40')
    const resp = await axios.get('https://www.googleapis.com/books/v1/volumes'+`${this.props.location.state.search}`+'&key=AIzaSyDKo40H2OAbPJdF4fZcpRLDL6vV7SrJpGE&maxResults=40')
    this.setState({books: resp.data.items})
    // console.log('clicked',{linkUrl})
} 
render() {
    return(
        <div className='ShopPageContainer'> 
        {this.state.books.map((book,index) => {
            return(
                <BookContainer 
                urlImg = {book.volumeInfo.imageLinks.thumbnail}
                title = {book.volumeInfo.title}
                price = {this.state.rates[index]} 
                ref   = {this.imgRef} />
            ) 
        })}
        </div>
    )
}
}
export default ShopPage;
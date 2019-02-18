import React, {Component} from 'react';
import './BookShelf.css';
import Header from '../Header';
import axios from 'axios';
import PropTypes from 'prop-types';
import BookShelfBody from '../BookShelfBody';

class BookShelf extends Component {
  state = {
    bookDetails: [],
    isLoading: true,
  }
  async componentDidMount(){
    const bookData = await axios.get('http://localhost:8080/books/ratings');
    console.log('BOOKDATA',bookData);
    
      this.setState({
        bookDetails: bookData.data,
        isLoading: false
      });
    console.log('this.state.bookDetails',this.state);
    // Object.entries(this.state.bookDetails).forEach(
    //   ([key, value]) => value.forEach(books => this.props.sendBookDetailsToStore(books))
    // );
    this.props.sendBookDetailsToStore(this.state.bookDetails);
    // this.state.bookDetails.map((books) => {
    //   // console.log('jhkjhkhnk',books);
    //   this.props.sendBookDetailsToStore(books)});
    // console.log('hjhhhhhhhhhhh',this.props);
  }
  render(){
    if(this.state.isLoading){
      return(
        <div>LOADING...</div>
      );
    }
    console.log('this.props', this.props.book);
    return (
      <div>
       <div className="BookShelf">
          <Header />
          <BookShelfBody bookData = {this.props.book}/>
       </div>
       </div>
    );
  }
}

BookShelf.propTypes = {
  sendBookDetailsToStore: PropTypes.func
}
export default BookShelf
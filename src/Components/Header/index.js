import React, { Component } from 'react';
import './Header.css';
import axios from 'axios';

class Header extends Component {
  state = {
    bookDetails: [],
    isLoading: true,
  }

  onClickReload = async () => {
    const bookData = await axios.get('http://localhost:8080/books/ratings');
    // console.log('BOOKDATA',bookData);
    this.props.removeBookfromStore(this.state.bookDetails);
    this.setState({
      bookDetails: bookData.data,
      isLoading: false,
    });
    // console.log('this.state.bookDetails',this.state);

    this.props.sendBookDetailsToStore(this.state.bookDetails);
  }

  render() {
    return (
      <div className="bookShelf">
        <div className="header">
          <div className="headerLineLeft"><hr /></div>
          <button type="button" className="title" onClick={this.onClickReload}>BS</button>
          <div className="headerLineRight"><hr /></div>
        </div>
        <div className="subheading">The Book Shelf</div>
      </div>
    );
  }
}

export default Header;

import React, {Component} from 'react';
import './AuthorCard.css';
import BookCard from '../BookCard';
import PropTypes from 'prop-types';

class AuthorCard extends Component {
  render(){
    let cardRow = [];
    let author;
    let counter = 0;
    this.props.bookData.forEach(element => {
      counter += 1;
      author = element.Author;
      cardRow.push(
        <BookCard bookData = {element} styleCounter = {counter} key={element.id}/>
      )
    });
    return (
      <div class = "authorName">
        <div class="author">{author}</div>
        <div className="authorCard">
          {cardRow}
        </div>
      </div>
    );
  }
}

AuthorCard.propTypes = {
  bookData: PropTypes.array
}
export default AuthorCard;

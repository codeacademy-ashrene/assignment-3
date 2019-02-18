import React, {Component} from 'react';
import './AuthorCard.css';
import BookCard from '../BookCard';
import PropTypes from 'prop-types';

class AuthorCard extends Component {
  render(){
    let cardRow = [];
    let author;
    this.props.bookData.forEach(element => {
      author = element.Author;
      cardRow.push(
        <BookCard bookData = {element} key={element.id}/>
      )
    });
    return (
      <div>
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

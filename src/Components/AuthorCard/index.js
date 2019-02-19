import React, { Component } from 'react';
import './AuthorCard.css';
import BookCard from '../BookCard';

class AuthorCard extends Component {
  render() {
    const cardRow = [];
    let author;
    let counter = 0;
    this.props.bookData.forEach((element) => {
      counter += 1;
      author = element.Author;
      cardRow.push(
        <BookCard bookData={element} styleCounter={counter} key={element.id} />,
      );
    });
    return (
      <div className="authorName">
        <fieldset>
          <legend className="author">{author}</legend>
          <div className="authorCard">
            {cardRow}
          </div>
        </fieldset>

      </div>
    );
  }
}

export default AuthorCard;

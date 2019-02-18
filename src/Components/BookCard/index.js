import React, {Component} from 'react';
import './BookCard.css';
import CardContent from '../CardContent';
import PropTypes from 'prop-types';

class BookCard extends Component {
  render(){

    // console.log('PROPS',this.props.bookData)
    // let rows = [];
    // console.log('BOOKDATA',this.props.bookData)
    // this.props.bookData.map(element => {
    //   console.log('element',element);
    //   rows.push(
    //     <CardContent key={element.id} bookData = {element}/>
    //   )
    // });
    return (
      <div className="card"><CardContent bookData={this.props.bookData} styleCounter={this.props.styleCounter}/></div>
    );
  }
}
BookCard.propTypes = {
  bookData: PropTypes.object
}

export default BookCard
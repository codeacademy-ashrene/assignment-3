import React, {Component} from 'react';
import AuthorCard from '../AuthorCard';
import './BookShelfBody.css';


class BookShelfBody extends Component {    
  render(){
    let row = [];
    // console.log('BOOOOOK',this.props.bookData[0]);
    // Object.keys(this.props.bookData[0]).forEach(
    //   (key) => {
    //     console.log('key',key);
    //     row.push(
    //     <AuthorCard key={key} bookData={this.props.bookData[0][key]} />
    //   )}
    // );
    this.props.bookData.forEach(element => {
      for (const key of Object.keys(element)) {
        row.push(
          <AuthorCard key={key} bookData={element[key]} />
        )
    };
    
  });

  //   Object.keys(obj).forEach(function(key) {
  //     console.log(key, obj[key]);
  // });
    // const author = [];
    // const rows = [];
    // let lastCategory = null;
    // console.log('PROPS',this.props.bookData);
    // this.props.bookData.forEach((product) => {

    //   this.props.bookData.forEach((element) => {
    //     if(element.Author === product.Author){

    //     }
    //   })
    //   if (product.Author !== lastCategory) {
    //     rows.push(<BookCard bookData={product}/>); 
    //   }
    //   // rows.push(
    //   //   <ProductRow
    //   //     product={product}
    //   //     key={product.name} />
    //   // );
    //   lastCategory = product.Author;

    // });


    // let authorBooks = [];
    // console.log(this.props.bookData);
    // let author = this.props.bookData.Author;
    // this.props.bookData.forEach(book => {
    //   if(author === book.Author)
    //   authorBooks.push(
    //     <AuthorCard bookData = {book} author = {book.Author} key={book.id}/>
    //   )
    //   else{
    //     author = book.Author
    //   }
    // })
    return (
      <div>
       <div className="bookShelfBody">
          {row}
       </div>
       </div>
    );
  }
}

export default BookShelfBody
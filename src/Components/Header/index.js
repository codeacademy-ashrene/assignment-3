import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  render(){
    return (
      <div className = "bookShelf">
      <div className = "header">
        <div className = "headerLineLeft"><hr/></div>
        <div className = "title">BS</div>
        <div className = "headerLineRight"><hr/></div>
      </div>
      <div className = "subheading">The Book Shelf</div>
      </div>
    );
  }
}

export default Header
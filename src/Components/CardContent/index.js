import React, {Component} from 'react';
import './CardContent.css';
import Axios from 'axios';
import PropTypes from 'prop-types';

class CardContent extends Component {
  state = {
    likeStatus: "unlike",
  }
  async componentDidMount(){
    const likeData = await Axios.get(`http://localhost:8080/bookDetails/${this.props.bookData.id}`);
    console.log('AXIOSLIKE', likeData);
    this.setState({
      likeStatus: likeData.data.likeStatus,
    })
  }
  
  render(){
    const liked = this.state.likeStatus === "like" ? './Icons/heart-red.svg' : './Icons/heart-black.svg';
    console.log('LIKESTATE',this.state);
    return (
      
      <div className="cardContent">
        <img className="image" src="./cover_image.jpeg" alt="Harry Potter Books"/>
        <div class = "cardTextAndReaction">
          <div className = "cardText">{this.props.bookData.Name}{this.props.bookData.id}</div>
          <div class = "rating">{this.props.bookData.rating}<img alt="heart" src={liked} className="heart" /></div>
        </div>
      </div>
    );
  }
}

CardContent.propTypes = {
  bookData: PropTypes.array
}

export default CardContent
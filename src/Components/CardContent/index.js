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
  onLikeClick = async () => {

    if(this.state.likeStatus === "like"){
      Axios.put(`http://localhost:8080/books/${this.props.bookData.id}/unlike`).then(
        this.setState({
          likeStatus: "unlike"
        })
      )
      
    }
    else{
      Axios.put(`http://localhost:8080/books/${this.props.bookData.id}/like`).then(
        this.setState({
          likeStatus: "like"
        })
      )
      
    }
    // const likeData = await Axios.get(`http://localhost:8080/books/${this.props.bookData.id}/${this.state.likeStatus}`);
    // console.log('DBSTAT', likeData);
  }

  // async componentDidUpdate(prevState){
  //   if(this.state.likeStatus !== prevState.likeStatus){
  //     const likeData = await Axios.get(`http://localhost:8080/books/${this.props.bookData.id}/${this.state.likeStatus}`)
  //         this.setState({
  //           likeStatus: this.state.likeStatus
  //         })
  //   }
  // }
  render(){
    let cardColour;
    let liked;
    // const liked = (this.state.likeStatus !== "like")&&((this.props.styleCounter % 2) === 0) ? './Icons/heart-black.svg' : ;
    if((this.state.likeStatus !== "like")){
      if((this.props.styleCounter % 2) === 0){
        cardColour = "cardContentWhite";
        liked = './Icons/heart-black.svg';
      }
      else{
        cardColour = "cardContentOrange";
        liked = './Icons/heart-plain.svg';
      }
    }
    else{
      if((this.props.styleCounter % 2) === 0){
        cardColour = "cardContentWhite";
      }
      else{
        cardColour = "cardContentOrange";
      }
      liked = './Icons/heart-red.svg';
    }
    // const cardColour = (this.props.styleCounter % 2) === 0 ? "cardContentWhite" : "cardContentOrange";
    console.log('LIKESTATE',this.state);
    return (
      
      <div className={cardColour}>
        <img className="image" src="./cover_image.jpeg" alt="Harry Potter Books"/>
        <div className = "cardTextAndReaction">
          <div className = "cardText">{this.props.bookData.Name}{this.props.bookData.id}</div>
          <div className = "rating">{Math.round(this.props.bookData.rating *10)/10}<img alt="heart" src={liked} className="heart" onClick={this.onLikeClick}/></div>
        </div>
      </div>
    );
  }
}

CardContent.propTypes = {
  bookData: PropTypes.object
}

export default CardContent
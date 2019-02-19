import { combineReducers } from 'redux';

import { ADD_BOOK } from '../actions';
import { REMOVE_BOOK } from '../actions';

const book = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      // console.log('statepayload',[
      //   ...state,
      //   action.payload
      // ])
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      const newArray = [];
      return newArray;

    default:
      return state;
  }
};

const BookPost = combineReducers({
  book,
});

export default BookPost;

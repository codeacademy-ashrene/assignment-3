import BookShelf from '../Components/BookShelf';
import { connect } from 'react-redux';
import {sendBookDetailsToStoreAction} from '../actions';

const mapStateToProps = (state) =>({
  book: state.book
})

const mapDispatchToProps = (dispatch) => ({
  sendBookDetailsToStore: (books) => {
    dispatch(sendBookDetailsToStoreAction(books));
  }
});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookShelf);

export default ConnectedApp;

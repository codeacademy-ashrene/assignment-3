import { connect } from 'react-redux';
import BookShelf from '../Components/BookShelf';
import { sendBookDetailsToStoreAction, removeBookfromStoreAction } from '../actions';

const mapStateToProps = state => ({
  book: state.book,
});

const mapDispatchToProps = dispatch => ({
  sendBookDetailsToStore: (books) => {
    dispatch(sendBookDetailsToStoreAction(books));
  },
  removeBookfromStore: (books) => {
    dispatch(removeBookfromStoreAction(books));
  },
});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookShelf);

export default ConnectedApp;

export const ADD_BOOK = 'ADD_BOOK';

export const sendBookDetailsToStoreAction = (books) => ({
  type: ADD_BOOK,
  payload: books
});

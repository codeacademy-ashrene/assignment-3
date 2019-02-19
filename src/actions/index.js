export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const sendBookDetailsToStoreAction = books => ({
  type: ADD_BOOK,
  payload: books,
});
export const removeBookfromStoreAction = books => ({
  type: REMOVE_BOOK,
  payload: books,
});

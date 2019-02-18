import React from 'react';
import renderer from 'react-test-renderer';
import AuthorCard from '.';


describe('AuthorCard',()=>{
    const bookData={
        Author: 'J K Rowling',
        id: 10,
        Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
        rating: 4.45
      }
    
    it('should render header',()=>{
        const tree=renderer.create(<AuthorCard bookData={bookData}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
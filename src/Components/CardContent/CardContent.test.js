import React from 'react';
import renderer from 'react-test-renderer';
import CardContent from '.';


describe('CardContent',()=>{
    const bookData={
        Author: 'J K Rowling',
        id: 10,
        Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
        rating: 4.45
      }
    
    it('should render header',()=>{
        const tree=renderer.create(<CardContent bookData={bookData}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
import React from 'react';
import renderer from 'react-test-renderer';
import BookShelf from '.';


describe('BookShelf',()=>{
    it('should render BookShelf',()=>{
        const tree=renderer.create(<BookShelf  />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
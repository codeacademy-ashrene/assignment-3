import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BookShelfContainer from './containers/BookShelfContainer'
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import BookPost from './reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// ReactDOM.render(<Header />, document.getElementById('root'));

// // If you want your Header to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

const store = createStore(BookPost, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log('STORE',store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));

render(
  <div>           
      <Router>
          <Switch>
          <Provider store={store}>
              <Route exact path = '/' component = {BookShelfContainer} />
          </Provider>
          </Switch>
      </Router>
  </div>
  ,
  document.getElementById('root'),
);
// store.dispatch(addBlog({title:'Learn about actions',liked:true,claps:3}))
// store.dispatch(addBlog({title:'Learn about reducers',liked:false,claps:2}))
unsubscribe();

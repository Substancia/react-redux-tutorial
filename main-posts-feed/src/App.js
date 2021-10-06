import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './app/Navbar';
import { PostsList, AddPostForm , SinglePostPage} from './features';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={() =>
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            }
          />
          <Route exact path='/posts/:postId' component={SinglePostPage} />
          <Route exact path='/editPost/:postId' render={props => <AddPostForm edit {...props} />} />
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './Home'
import Subreddit from './Subreddit'

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={Home} test="test"/>
          <Route path="/r/:subreddit" component={Subreddit}/>
        </main>
      </Router>      
    )
  }
}

export default App;

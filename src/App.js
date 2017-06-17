import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'
import Subreddit from './Subreddit'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.fetchSubreddit = this.fetchSubreddit.bind(this)
  }

  fetchSubreddit() {
    fetch(`https://www.reddit.com/.json`)
      .then(res => res.json())
      .then(reddit => this.setState({ reddit }))
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/r">About</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/r" component={Subreddit}/>
        </div>
      </Router>      
    )
  }
}

export default App;

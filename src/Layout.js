import React from 'react'
import { Route } from 'react-router-dom'

import Sidebar from './Sidebar'
import Content from './Content'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.setSubreddit = this.setSubreddit.bind(this)
    this.ContentRoute = (props) => <Content setSubreddit={this.setSubreddit} {...props} />
    this.state = {
      subreddit: null,
    }
  }

  setSubreddit(subreddit) {
    this.setState({ subreddit })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.isExact && !this.props.isExact) {
      this.setSubreddit(null)
    }
  }   

  render() {
    return (
      <main className="flex">
        <Sidebar subreddit={this.state.subreddit} />
        <Route 
          path="/r/:subreddit" 
          component={this.ContentRoute}/>
      </main>
    )
  }
}

export default Layout
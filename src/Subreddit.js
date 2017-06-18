import React from 'react'
import _get from 'lodash/get'
import { Route } from 'react-router-dom'

import Layout from './Layout'
import Comments from './Comments'

class Subreddit extends React.Component {
  constructor(props) {
    super(props)
    this.fetchSubreddit = this.fetchSubreddit.bind(this)
    this.state = {}
  }

  fetchSubreddit(sub) {
    const path = sub ? `/r/${sub}.json` : '/.json'
    fetch(`https://www.reddit.com${path}`)
      .then(res => res.json())
      .then(reddit => this.setState({ reddit }))
  }

  componentDidMount() {
    this.fetchSubreddit(this.props.match.params.subreddit)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ reddit: [] })
    this.fetchSubreddit(nextProps.match.params.subreddit)
  }  

  render() {
    const posts = _get(this.state, 'reddit.data.children')
    return (
      <Layout posts={posts}>
        <h1>Subreddit - {this.props.match.params.subreddit}</h1>
        <Route path={`${this.props.match.url}/comments/:id`} component={Comments} />
      </Layout>
    )
  }
}

export default Subreddit
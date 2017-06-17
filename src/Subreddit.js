import React from 'react'
import _get from 'lodash/get'

import Layout from './Layout'

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

  render() {
    const posts = _get(this.state, 'reddit.data.children')
    return (
      <Layout posts={posts}>
        <h1>Subreddit - {this.props.match.params.subreddit}</h1>
      </Layout>
    )
  }
}

export default Subreddit
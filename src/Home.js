import React from 'react'
import _get from 'lodash/get'

import Sidebar from './Sidebar'

class Home extends React.Component {
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
    this.fetchSubreddit()
  }

  render() {
    const posts = _get(this.state, 'reddit.data.children')
    return (
      <section className="flex">
        <h1>home</h1>
        <Sidebar posts={posts} />
      </section>
    )
  }
}

export default Home
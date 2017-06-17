import React from 'react'
import _get from 'lodash/get'

import Sidebar from './Sidebar'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    fetch(`https://www.reddit.com/.json`)
      .then(res => res.json())
      .then(reddit => this.setState({ reddit }))
  }

  render() {
    console.log(this.state)
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
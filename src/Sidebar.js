import React from 'react'
import { Link } from 'react-router-dom'
import _get from 'lodash/get'

import { Home } from './icons/Home'
import PostItem from './PostItem'

class Sidebar extends React.Component {
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
    this.fetchSubreddit(this.props.subreddit)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.subreddit !== this.props.subreddit) {
      this.setState({ reddit: [] })
      this.fetchSubreddit(nextProps.subreddit)
    }
  }  

  render() {
    const posts = _get(this.state, 'reddit.data.children')
    const title = this.props.subreddit ? this.props.subreddit : 'Front Page'
    return (
      <aside style={{ width: 300 }} className="flex-none border-right border-gray">
        <div className="flex items-center p1">
          <Link to='/'>
            <Home className="icon gray" />
          </Link>
          <div className="flex-auto center">
            {title}
          </div>
        </div>
        <ul className="list-reset p0 m0">
          {posts && posts.map(post => <PostItem key={post.data.id} post={post} />)}
        </ul>
      </aside>
    )
  }
}

export default Sidebar
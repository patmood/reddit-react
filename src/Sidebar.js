import React from 'react'
import { Link } from 'react-router-dom'
import _get from 'lodash/get'
import ago from 's-ago'

import { Comment } from './icons/Comment'
import { Home } from './icons/Home'

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
    return (
      <aside style={{ width: 300 }} className="flex-none border-right border-gray">
        <div>
          <Link to='/'>
            <Home className="icon gray" />
          </Link>
        </div>
        <ul className="list-reset p0 m0">
          {posts && posts.map(post => <li key={post.data.id} className="p1 flex border-bottom border-gray hover">
            <div className="flex-auto">
              <div>{post.data.title}</div>
              <div className="muted">{post.data.domain.toLowerCase()}</div>
              <div>
                <span>
                  {`${ago(new Date(post.data.created * 1000))} in `}
                </span>
                <Link to={`/r/${post.data.subreddit}`}>
                  {post.data.subreddit}
                </Link>
              </div>
            </div>
            <Link to={`/r/${post.data.subreddit}/comments/${post.data.id}`}>
              <div>
                <Comment className='icon gray' />
                <div>{post.data.num_comments}</div>
              </div>
            </Link>
          </li>)}
        </ul>
      </aside>
    )
  }
}

export default Sidebar
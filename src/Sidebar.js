import React from 'react'
import { Link } from 'react-router-dom'
import { Comment } from './icons/Comment'
import { Home } from './icons/Home'

export const Sidebar = ({ posts }) => (
  <aside style={{ width: 300 }} className="flex-none border-right border-gray">
    <div>
      <Link to='/'>
        <Home className="icon gray" />
      </Link>
    </div>
    <ul className="list-reset p0 m0">
      {posts.map(post => <li key={post.data.id} className="p1 flex border-bottom border-gray hover">
        <div className="flex-auto">
          <div>{post.data.title}</div>
          <div className="muted">{post.data.domain.toLowerCase()}</div>
          <Link to={`/r/${post.data.subreddit}`}>
            {post.data.subreddit}
          </Link>
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

Sidebar.defaultProps = {
  posts: []
}

export default Sidebar
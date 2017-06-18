import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = ({ posts }) => (
  <aside style={{ flexBasis: 300 }}>
    <ul className="list-reset">
      {posts.map(post => <li key={post.data.id} className="p1 flex">
        <div>
          <div>{post.data.title}</div>
          <div className="muted">{post.data.domain.toLowerCase()}</div>
          <Link to={`/r/${post.data.subreddit}`}>
            {post.data.subreddit}
          </Link>
        </div>
        <div>
          <Link to={`/r/${post.data.subreddit}/comments/${post.data.id}`}>
            Cmnts
          </Link>
        </div>
      </li>)}
    </ul>
  </aside>
)

Sidebar.defaultProps = {
  posts: []
}

export default Sidebar
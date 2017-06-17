import React from 'react'

export const Sidebar = ({ posts }) => (
  <aside style={{ flexBasis: 300 }}>
    <ul className="list-reset">
      {posts.map(post => <li key={post.data.id} className="p1">
        <div>{post.data.title}</div>
        <div className="muted">{post.data.domain.toLowerCase()}</div>
      </li>)}
    </ul>
  </aside>
)

Sidebar.defaultProps = {
  posts: []
}

export default Sidebar
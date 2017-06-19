import React from 'react'
import { Link } from 'react-router-dom'
import ago from 's-ago'

import { Comment } from './icons/Comment'

const PostItem = ({ post }) => (
  <li 
    className="p1 flex border-bottom border-gray hover"
    onClick={this.goToComments}
  >
    <div className="flex-auto">
      <div>
        <Link 
          to={`/r/${post.data.subreddit}/comments/${post.data.id}`}
          className="text-decoration-none color-inherit"
        >
          {post.data.title}
        </Link>
      </div>
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
    <Link 
      to={`/r/${post.data.subreddit}/comments/${post.data.id}`} 
      className="center text-decoration-none color-inherit muted"
    >
      <Comment className="icon" />
      <div>{post.data.num_comments}</div>
    </Link>
  </li>
)

export default PostItem
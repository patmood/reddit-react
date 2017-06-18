import React from 'react'
import _get from 'lodash/get'

export const Comment = ({ data, isChild }) => {
  const childComments = _get(data, 'replies.data.children')
  const className = `${isChild ? 'child' : 'parent'}-comment flex`
  return (
    <div className={className}>
      <div className="flex-auto">
        <div className="p1">
          {data.body}
        </div>
        { childComments && childComments.map(reply => <Comment key={reply.data.id} {...reply} isChild />)}
      </div>
    </div>
  )
}
export default Comment
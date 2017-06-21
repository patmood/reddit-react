import React from 'react'
import _get from 'lodash/get'

import IconCaret from './icons/IconCaret'

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.toggleCollapse = this.toggleCollapse.bind(this)
    this.state = {
      collapsed: false,
    }
  }

  toggleCollapse() {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
    const { data, isChild } = this.props
    const { collapsed } = this.state
    const childComments = _get(data, 'replies.data.children')
    const className = `${isChild ? 'child' : 'parent'}-comment flex`
    
    if (!data.body) return null
    
    return (
      <div className={className}>
        <div className="flex-auto">
          <header className="flex items-center pointer muted p1" onClick={this.toggleCollapse}>
            <div className={ collapsed ? "collapse-icon mr1" : "collapse-icon--collapsed mr1"}>
              <IconCaret className="icon" style={{ width: 15 }} />
            </div>
            <div>{data.author}</div>
          </header>
          { !collapsed && <div>
            <div className="p1">
              {data.body}
            </div>
            { childComments && childComments.map(reply => <Comment key={reply.data.id} {...reply} isChild />)}
          </div>}
        </div>
      </div>
    )    
  }
}



export default Comment
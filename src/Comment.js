import React from 'react'
import _get from 'lodash/get'

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
          <header className="flex pointer muted p1" onClick={this.toggleCollapse}>
            <div className="mr1">
              <div className={ collapsed ? "collapse-icon" : "collapse-icon--collapsed"}>></div>
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
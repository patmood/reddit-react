import React from 'react'
import _get from 'lodash/get'
import ago from 's-ago'

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.fetchComments = this.fetchComments.bind(this)
    this.state = {
      comments: [],
    }
  }

  fetchComments(id) {
    fetch(`https://www.reddit.com/comments/${id}.json`)
      .then(res => res.json())
      .then(comments => this.setState({ comments }))
  }

  componentDidMount() {
    this.fetchComments(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ comments: [] })
    this.fetchComments(nextProps.match.params.id)
  }

  render() {
    const [selfPost, comments] = this.state.comments
    if (!selfPost || !comments) return null
    const postInfo = _get(selfPost, 'data.children.0.data')
    return (
      <div>
        <h1>{postInfo.title}</h1>
        <div className="flex">
          <div className="mr1">{postInfo.ups}</div>
          <div>{ago(new Date(postInfo.created * 1000))}</div>
        </div> 
        {comments.data.children.map(comment => <div key={comment.data.id} className="mb1">
          {comment.data.body}
        </div>)}
      </div>
    )
  }
}

export default Comments
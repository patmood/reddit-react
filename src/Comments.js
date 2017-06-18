import React from 'react'

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
    return (
      <div>
        <h1>Comments - {this.props.match.params.id}</h1>
        {comments && comments.data.children.map(comment => <div key={comment.data.id} className="mb1">
          {comment.data.body}
        </div>)}
      </div>
    )
  }
}

export default Comments
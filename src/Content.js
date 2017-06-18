import React from 'react'
import { Route } from 'react-router-dom'

import Comments from './Comments'
// TODO: add article component

class Content extends React.Component {
  componentDidMount() {
    if (this.props.match.isExact) {
      this.props.setSubreddit(this.props.match.params.subreddit)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.isExact && !this.props.match.isExact) {
      this.props.setSubreddit(nextProps.match.params.subreddit)
    }
  }  

  render() {
    return (
      <article>
        <Route path={`${this.props.match.url}/comments/:id`} component={Comments} />
      </article>
    )
  }
}

export default Content
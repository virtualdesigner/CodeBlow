import React, { Component } from "react";
import { connect } from "react-redux";

import { getPost, addComment } from "../../actions/postActions";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.post_id) {
      this.props.getPost(this.props.match.params.post_id);
    }
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { post } = this.props;

    this.props.addComment(post._id, this.state);
  }

  render() {
    const { post, loading } = this.props;

    let comments = null;

    if (post.comments) {
      comments = post.comments.map(comment => (
        <div className="comments" key={comment._id}>
          {comment.text}
        </div>
      ));
    }

    return (
      <div className="post-and-comments">
        <div className="post">{post.text}</div>
        <div className="comments-input-form">
          <form onSubmit={this.onSubmit}>
            <textarea
              name="comments-input"
              id="comments-input"
              cols="80"
              rows="5"
              placeholder="Write comments here..."
              value={this.state.text}
              onChange={this.onChange}
              required
            />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
        {comments}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.posts.post,
  loading: state.posts.loading
});

export default connect(
  mapStateToProps,
  { getPost, addComment }
)(Post);

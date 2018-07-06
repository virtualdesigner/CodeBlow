import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getPostsByCategory } from "../../actions/postActions";

class PostsList extends Component {
  componentDidMount() {
    if (this.props.match.params.category) {
      this.props.getPostsByCategory(this.props.match.params.category);
    }
  }

  render() {
    const { loading, posts } = this.props;

    console.log(posts);
    return (
      <div className="post-list">
        <p className="post-list-heading">Posts List</p>
        {posts.map(post => (
          <Link
            to={`/post/${post._id}`}
            className="post-list-element"
            key={post._id}
          >
            <p>{post.text}</p>
          </Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  loading: state.posts
});

export default connect(
  mapStateToProps,
  { getPostsByCategory }
)(PostsList);

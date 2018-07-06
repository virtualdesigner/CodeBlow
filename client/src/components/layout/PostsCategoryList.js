import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../../actions/postActions";
import { getCategories } from "../../utils/getCategories";

class PostsCategoryList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props;

    let content = <h3>There are no Posts...</h3>;

    let categoryList;

    if (posts) {
      categoryList = getCategories(posts);
      if (categoryList.length > 0) {
        content = categoryList.map((category, index) => (
          <Link to={`/posts/category/${category}`} key={index}>
            <span>{category}</span>
          </Link>
        ));
      }
    }

    return (
      <div>
        <div className="qa-category-lister-box">{content}</div>
        <footer
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "80px"
          }}
        >
          <Link
            style={{
              paddingLeft: "180px",
              paddingRight: "180px",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "10px",
              outline: "none",
              border: "2px solid #203541",
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              boxShadow:
                "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              textDecoration: "none"
            }}
            to="/posts/create-post"
          >
            Create Post
          </Link>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  { getPosts }
)(PostsCategoryList);

import React, { Component } from "react";
import { connect } from "react-redux";

import { addPost } from "../../actions/postActions";

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      category: "HTML"
    };

    this.onChange = this.onChange.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  categoryChange(e) {
    this.setState({
      category: e.target.value
    });
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  submitPost(e) {
    e.preventDefault();
    const newPost = {
      text: this.state.text,
      category: this.state.category
    };
    this.props.addPost(newPost);
    this.props.history.push("/posts");
  }

  render() {
    return (
      <div className="post-box">
        <h1 className="post-box-heading">
          Your posts can impact many lives...
        </h1>
        <form onSubmit={this.submitPost}>
          <textarea
            name="post-input-box"
            placeholder="Ask your question here"
            id="post-input-box"
            cols="90"
            rows="15"
            onChange={this.onChange}
            value={this.state.text}
            required
          />
          <select
            name="question-category-list"
            id="question-category-list"
            onChange={this.categoryChange.bind(this)}
          >
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React.JS">React.JS</option>
            <option value="Node.JS">Node.JS</option>
            <option value="Express.JS">Express.JS</option>
            <option value="MongoDB">MongoDB</option>
          </select>
          <button type="submit" id="post-submit-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addPost }
)(CreatePost);

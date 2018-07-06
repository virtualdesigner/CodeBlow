import React, { Component } from "react";
import { connect } from "react-redux";

import { addQA } from "../../actions/qaActions";

class CreateQA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      category: "HTML"
    };

    this.onChange = this.onChange.bind(this);
    this.submitQA = this.submitQA.bind(this);
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

  submitQA(e) {
    e.preventDefault();
    const newQA = {
      text: this.state.text,
      category: this.state.category
    };
    this.props.addQA(newQA);
    this.props.history.push("/qa");
  }

  render() {
    return (
      <div className="ask-q-box">
        <h1 className="ask-q-box-heading">
          Your Q/A's can lighten this field...
        </h1>
        <form onSubmit={this.submitQA}>
          <textarea
            name="ask-q-input-box"
            placeholder="Ask your question here"
            id="ask-q-input-box"
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
          <button type="submit" id="ask-q-submit-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addQA }
)(CreateQA);

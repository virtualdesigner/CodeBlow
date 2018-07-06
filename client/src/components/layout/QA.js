import React, { Component } from "react";
import { connect } from "react-redux";

import { getQA, addAnswer } from "../../actions/qaActions";

class QA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.qa_id) {
      this.props.getQA(this.props.match.params.qa_id);
    }
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { qa } = this.props;

    this.props.addAnswer(qa._id, this.state);
  }

  render() {
    const { qa, loading } = this.props;

    let Answers = null;

    if (qa.answers) {
      Answers = qa.answers.map(answer => (
        <div className="answers" key={answer._id}>
          {answer.text}
        </div>
      ));
    }

    return (
      <div className="question-answers">
        <div className="question">{qa.text}</div>
        <div className="answers-input-form">
          <form onSubmit={this.onSubmit}>
            <textarea
              name="answers-input"
              id="answers-input"
              cols="80"
              rows="5"
              placeholder="Write answers here..."
              value={this.state.text}
              onChange={this.onChange}
              required
            />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
        {Answers}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  qa: state.qas.qa,
  loading: state.qas.loading
});

export default connect(
  mapStateToProps,
  { getQA, addAnswer }
)(QA);

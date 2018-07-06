import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getQAsByCategory } from "../../actions/qaActions";

class QAList extends Component {
  componentDidMount() {
    if (this.props.match.params.category) {
      this.props.getQAsByCategory(this.props.match.params.category);
    }
  }

  render() {
    const { loading, qas } = this.props;

    console.log(qas);
    return (
      <div className="qa-list">
        <p className="qa-list-heading">Q/A's List</p>
        {qas.map(qa => (
          <Link to={`/qa/${qa._id}`} className="qa-list-element" key={qa._id}>
            <p>{qa.text}</p>
          </Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  qas: state.qas.qas,
  loading: state.qas
});

export default connect(
  mapStateToProps,
  { getQAsByCategory }
)(QAList);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getQAs } from "../../actions/qaActions";
import { getCategories } from "../../utils/getCategories";

class QACategoryList extends Component {
  componentDidMount() {
    this.props.getQAs();
  }

  render() {
    const { qas } = this.props;

    let content = <h3>There are no Q/A's...</h3>;

    let categoryList;

    if (qas) {
      categoryList = getCategories(qas);
    }

    if (categoryList.length > 0) {
      content = categoryList.map((category, index) => (
        <Link to={`/qas/category/${category}`} key={index}>
          <span>{category}</span>
        </Link>
      ));
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
            to="/qas/create-qa"
          >
            Create QA
          </Link>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  qas: state.qas.qas
});

export default connect(
  mapStateToProps,
  { getQAs }
)(QACategoryList);

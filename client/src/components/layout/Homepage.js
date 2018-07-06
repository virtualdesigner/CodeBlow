import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-inner">
          <div className="landing-heading">
            Here you can find Interesting posts and Q/A's about Programming
          </div>
          <div className="opt-card-list">
            <div className="qa-card">
              <Link to="/qa" className="qa-opt">
                <div className="card-inner">Q/A Section</div>
              </Link>
            </div>
            <div className="posts-card">
              <Link to="/posts" className="post-opt">
                <div className="card-inner">Posts Section</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;

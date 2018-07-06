import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="navHeading">
                CodeBlow
              </Link>
            </li>
            <li className="posts-sec opts">
              <Link to="/posts">Posts</Link>
            </li>
            <li className="qa-sec opts">
              <Link to="/qa">Q/A</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;

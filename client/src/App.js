import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";

import "./App.css";

import store from "./store";
import Navbar from "./components/layout/Navbar";
import Homepage from "./components/layout/Homepage";
import PostsCategoryList from "./components/layout/PostsCategoryList";
import QACategoryList from "./components/layout/QACategoryList";
import PostsList from "./components/layout/PostsList";
import Post from "./components/layout/Post";
import CreatePost from "./components/layout/CreatePost";
import QaList from "./components/layout/QaList";
import CreateQA from "./components/layout/CreateQA";
import QA from "./components/layout/QA";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/posts" component={PostsCategoryList} />
            <Route exact path="/qa" component={QACategoryList} />
            <Route
              exact
              path="/posts/category/:category"
              component={PostsList}
            />
            <Route exact path="/post/:post_id" component={Post} />
            <Route exact path="/posts/create-post" component={CreatePost} />
            <Route exact path="/qas/create-qa" component={CreateQA} />
            <Route exact path="/qas/category/:category" component={QaList} />
            <Route exact path="/qa/:qa_id" component={QA} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

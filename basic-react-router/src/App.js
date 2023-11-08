import React, { Component } from "react";
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import Blog from './containers/Blog/Blog'
import Posts from "./containers/Blog/Posts/Posts";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Blog />
        </div>
      </Router>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import FullPost from "./FullPost/FullPost";

function Blog() {
  return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/:id" element={<FullPost />} />
        </Routes>
      </div>
  );
}

export default Blog;

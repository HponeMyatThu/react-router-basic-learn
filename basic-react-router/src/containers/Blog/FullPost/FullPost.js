import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import { useParams } from "react-router-dom";

import "./FullPost.css";

function FullPost() {
  const [loadedPost, setLoadedPost] = useState(null);
  const [error, setError] = useState(false);

  const { id } = useParams(); // Access route parameter 'id'

  useEffect(() => {
    if (!id) {
      return;
    }

    console.log(id);
    // Fetch the post data based on the 'id' route parameter
    axios.get(`/posts/${id}`)
      .then((response) => {
        setLoadedPost(response.data);
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  const deletePostHandler = () => {
    if (id) {
      axios.delete(`/posts/${id}`)
        .then((response) => console.log(response));
    }
  };

  let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
  if (id) {
    post = <p style={{ textAlign: "center" }}>Loading...!</p>;
  }
  if (loadedPost) {
    post = (
      <div className="FullPost">
        <h1>{loadedPost.title}</h1>
        <p>{loadedPost.body}</p>{" "}
        <div className="Edit">
          <button onClick={deletePostHandler} className="Delete">Delete</button>
        </div>
      </div>
    );
  }

  return post;
}

export default FullPost;

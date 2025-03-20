import React, { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Posts do WordPress</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
          <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );
}

export default App;

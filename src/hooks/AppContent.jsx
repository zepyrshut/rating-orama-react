import React, { Fragment, useEffect, useState } from "react";

export default function AppContent() {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status !== "200") {
          setError("Invalid response code", response.status);
        } else {
          setError(null);
        }
        return response.json();
      })
      .then((json) => {
        setPosts(json);
        setIsLoaded(true);
      });
  });

  return (
    <Fragment>
      <p>Esto es contenido de la página</p>

      {!isLoaded ? (
        <div>
          <p>Cargando...</p>
        </div>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
}

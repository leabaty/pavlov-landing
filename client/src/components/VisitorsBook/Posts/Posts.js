import React from "react";
import { useSelector } from "react-redux";
import { SpinnerCircular } from "spinners-react";

import Post from "./Post/Post";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="posts__container">
      {!posts.length ? (
        <SpinnerCircular
          size={48}
          thickness={123}
          speed={100}
          color="rgba(0, 0, 0, 1)"
          secondaryColor="rgba(244, 237, 223, 1)"
        />
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post._id} item>
              <Post post={post} setCurrentId={setCurrentId} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;

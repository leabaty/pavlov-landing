import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <p>LOADING</p> : (
      <div>
        {posts.map((post) => (
          <div key={post._id} item >
            <Post post={post} setCurrentId={setCurrentId} />
          </div>
        ))}
      </div>

     
    )
  );
};

export default Posts;
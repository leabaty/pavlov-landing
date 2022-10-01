import React from "react";

import { AiFillLike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

import moment from "moment";
import { useDispatch } from "react-redux";

import { likePost, deletePost } from "../../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className=""
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div className="">
        <h3>{post.creator}</h3>
        <p>{moment(post.createdAt).fromNow()}</p>
      </div>
      <div className="">
        <button onClick={() => setCurrentId(post._id)}>Blabla</button>
      </div>
      <h2 className="">{post.title}</h2>
      <div>{post.message}</div>
      <div className="">
        <button onClick={() => dispatch(likePost(post._id))}>
          <AiFillLike fontSize="small" /> Like {post.likeCount}{" "}
        </button>
        <button onClick={() => dispatch(deletePost(post._id))}>
          <MdDelete fontSize="small" /> Delete
        </button>
      </div>
      </>
  );
};

export default Post;

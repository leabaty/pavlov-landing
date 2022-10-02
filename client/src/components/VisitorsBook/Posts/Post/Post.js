import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import "moment/locale/fr";

// Icons
import { AiFillLike } from "react-icons/ai";
// import { MdDelete } from "react-icons/md";

// Styling
import "./Post.scss";

// Components
import { likePost, deletePost } from "../../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  moment.locale("fr");

  return (
    <>
      <div className="post__container">
        <div className="post__image">
          <img
            className="post__image__file"
            src={post.selectedFile || ""}
            alt={post.title}
          />
        </div>

        <div className="post__content">
          {/* <h2 className="post__title">{post.title}</h2> */}

          <div className="post__message text">{post.message}</div>

          <div className="post__infos">
            <h3>{post.creator}</h3>
            <p>{", " + moment(post.createdAt).fromNow()}</p>
          </div>

          <div className="post__actions">
            <button
              className="post__actions__btn"
              onClick={() => dispatch(likePost(post._id))}
            >
              <AiFillLike fontSize="small" /> {post.likeCount}{" "}
            </button>
            {/* <button onClick={() => dispatch(deletePost(post._id))}>
          <MdDelete fontSize="small" /> Delete
        </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

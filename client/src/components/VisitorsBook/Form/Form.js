import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { createPost, updatePost } from "../../../actions/posts";

import "./Form.scss";

const VisitorsForm = ({ currentId, setCurrentId }) => {
  const [authorized, setAuthorized] = useState(false);

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
      setAuthorized(true);
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
      setAuthorized(true);
    }
  };

  return (
    <>
      {" "}
      <div className="page app__content">
          <h1 className="title title--medium">Postez votre message</h1>

          <div className="content__inside">
            {!authorized ? (
              <form className="form" onSubmit={handleSubmit}>
                <div className="block">
                  <p className="text">Pseudo/Nom</p>
                  <input
                    className="input"
                    name="creator"
                    label="Creator"
                    value={postData.creator}
                    onChange={(e) =>
                      setPostData({ ...postData, creator: e.target.value })
                    }
                  />
            
                </div>

                <div className="block">
                  <p className="text">Titre</p>
                  <input
                    className="input"
                    name="title"
                    label="Title"
                    value={postData.title}
                    onChange={(e) =>
                      setPostData({ ...postData, title: e.target.value })
                    }
                  />
                
                </div>

                <div className="block">
                  <p className="text"> Votre petit mot </p>
                  <textarea
                    className="input"
                    name="message"
                    label="Message"
                    value={postData.message}
                    // placeholder="..."
                    onChange={(e) =>
                      setPostData({ ...postData, message: e.target.value })
                    }
                  />
        
                </div>

                <div className="block">
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setPostData({ ...postData, selectedFile: base64 })
                    }
                  />
                </div>

                <button className="btn btn--large" type="submit">
                  Poster mon mot doux 🐱
                </button>

                <button className="btn btn--large" onClick={clear}>
                  Effacer
                </button>
              </form>
            ) : (
              <div>
                <p className="text">
                  Merci pour ce joli commentaire ! <br />
                  L'amicale des amoureux de Pavlov vous souhaitent une bonne
                  journée !
                </p>

                <Link to="/">
                  <button className="btn btn--large">Retour à l'accueil</button>
                </Link>
              </div>
            )}
          </div>
        </div>
     
    </>
  );
};

export default VisitorsForm;

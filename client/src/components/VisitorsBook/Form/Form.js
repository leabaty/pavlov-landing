import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { createPost, updatePost } from "../../../actions/posts";

import "./Form.scss";

const VisitorsForm = ({ currentId, setCurrentId }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [postErrors, setPostErrors] = useState({});

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

  const validateForm = (value) => {
    const errors = {};

    if (!value.creator) {
      errors.creator = "⚠ Ce champ est obligatoire";
    }
    if (!value.message) {
      errors.message = "⚠ Ce champ est obligatoire";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPostErrors(validateForm(postData));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(postErrors).length === 0 && isSubmit) {
      if (currentId === 0) {
        dispatch(createPost(postData));
        clear();
        setIsSent(true);
      } else {
        dispatch(updatePost(currentId, postData));
        clear();
        setIsSent(true);
      }
    }
  }, [postErrors]);

  return (
    <>
      {" "}
      <div className="content__inside">
        {!isSent ? (
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
              <p className="form__warning">{postErrors.creator}</p>
            </div>

            {/* <div className="block">
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
                
                </div> */}

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
              <p className="form__warning">{postErrors.message}</p>
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

            {/* <button className="btn btn--large" onClick={clear}>
                  Effacer
                </button> */}

            {Object.keys(postErrors).length !== 0 ? (
              <p className="text">⚠️ Les champs nom/pseudo et commentaire sont obligatoires.</p>
            ) : (
              ""
            )}
          </form>
        ) : (
          <p className="text">
            Merci pour ce joli commentaire ! <br />
            L'amicale des amoureux de Pavlov vous souhaitent une bonne journée !
          </p>
        )}
      </div>
    </>
  );
};

export default VisitorsForm;

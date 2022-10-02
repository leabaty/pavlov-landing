import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Components
import Form from "./Form/Form";
import Posts from "./Posts/Posts";

// Actions
import { getPosts } from "../../actions/posts";

const VisitorsBook = () => {
  const [form, setForm] = useState(false);

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const handleForm = () => {
    setForm(true)
  }

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Livre d'Or</h1>

          {!form ? (
              <button className="btn btn--large" type="submit" onClick={handleForm}>
                Nouveau post 😻
              </button>
          ) : (
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          )}

          <Posts setCurrentId={setCurrentId} />
        </div>
      </div>
    </>
  );
};

export default VisitorsBook;

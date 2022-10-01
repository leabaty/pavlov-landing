import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Form from "./Form/Form";
import Posts from "./Posts/Posts";
import { getPosts } from "../../actions/posts";

const VisitorsBook = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Livre d'Or</h1>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
          <h2 className="title title--medium">Mes petits mots</h2>
          <Posts setCurrentId={setCurrentId} />
        </div>
      </div>
    </>
  );
};

export default VisitorsBook;

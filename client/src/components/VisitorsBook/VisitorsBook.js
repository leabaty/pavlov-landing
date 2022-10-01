import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./VisitorsBook.scss";

function VisitorsBook({addresses, setAddressDetails}) {
  
  const [name, setName] = useState();
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  const [inputErrors, setInputErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };


  // checking if the fields are filled
  const validate = (name, title, message) => {
    const errors = {};
    if (!name) {
      errors.name = "⚠️ Ce champ est obligatoire";
    } 
    if (!title) {
      errors.title = "⚠️ Ce champ est obligatoire";
    } 
    if (!message) {
      errors.message = "⚠️ Ce champ est obligatoire";
    } 

    return errors;
  };

  // submitting the form
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputErrors(validate(name, title, message));
    setIsSubmit(true);
  };

  // posting the message
  useEffect(() => {
    if (Object.keys(inputErrors).length === 0 && isSubmit) {
      setAuthorized(true);
    }
  }, [inputErrors]);

  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Mon livre d'Or</h1>

          <div className="content__inside">
            {!authorized ? (
              <form className="form" onSubmit={handleSubmit}>

                <div className="block">
                  <p className="text">Pseudo/Nom</p>
                  <input className="" onChange={handleNameChange}/>
                  <p className="form__warning">{inputErrors.name}</p>
                </div>

                <div className="block">
                  <p className="text">Titre</p>
                  <input className="" onChange={handleTitleChange}/>
                  <p className="form__warning">{inputErrors.title}</p>
                </div>

                <div className="block">
                  <p className="text"> Votre petit mot </p>
                  <textarea 
                  className="input"
                    onChange={handleMessageChange}
                  />
                  <p className="form__warning">{inputErrors.message}</p>
                </div>

                <button className="btn btn--large">
                  Poster mon mot doux 🐱
                </button>

              </form>
            ) : (
              <div>
                <p className="text">
                  Merci pour ce joli commentaire ! <br />
                  L'amicale des amoureux de Pavlov vous souhaitent une bonne journée !
                </p>

                <Link to="/">
                  <button className="btn btn--large">Retour à l'accueil</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default VisitorsBook;

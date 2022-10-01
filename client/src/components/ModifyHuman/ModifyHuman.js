import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./ModifyHuman.scss";

function ModifyHuman({addresses, setAddressDetails}) {
  
  const [selectedAddress, setSelectedAddress] = useState();
  const [secretPin, setSecretPin] = useState("");
  // const [currentAddress, setCurrentAddress] = useState();

  const [inputErrors, setInputErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  const handleSelectedAddress = (event) => {
    setSelectedAddress(event.target.value);
  };

  const handleSecretPin = (event) => {
    setSecretPin(event.target.value);
  };

  const getCurrentAddressDetails = (addressName, addressData) => {
    const filteredAddress = addressData.find(
      (address) => address.name === addressName);
      setAddressDetails(filteredAddress);
  }
  
  // CHECKING THE INPUT ERRORS (PIN VALIDATION)
  const validate = (value) => {
    const errors = {};
    if (!value) {
      errors.secretPin = "⚠️ Ce champ est obligatoire";
    } if (value != process.env.REACT_APP_SECRET_PIN) {
      errors.secretPin = "❌ Le code ne correspond pas";
    }

    return errors;
  };

  // SUBMITTING THE FORM
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputErrors(validate(secretPin));
    setIsSubmit(true);
  };

  // FINALLY SENDING THIS EMAIL
  useEffect(() => {
    if (Object.keys(inputErrors).length === 0 && isSubmit) {
      getCurrentAddressDetails(selectedAddress, addresses)
      setAuthorized(true);
    }
  }, [inputErrors]);

  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Changer mon adresse</h1>

          <div className="content__inside">
            {!authorized ? (
              <form className="form" onSubmit={handleSubmit}>
                <div className="block">
                  <p className="text">Choisis la nouvelle addresse :</p>

                  <select className="" onChange={handleSelectedAddress}>
                    {addresses.map((address) => {
                      return (
                        <option key={address.id} value={address.name}>
                          {address.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="block">
                  <p className="text">Entre le code secret 🔑 </p>
                  <input
                    className=""
                    type="password"
                    name="secret_pin"
                    onChange={handleSecretPin}
                    value={secretPin}
                  />
                  <p className="form__warning">{inputErrors.secretPin}</p>
                </div>

                <button className="btn btn--large">
                  Changer l'addresse de Pavoyageur 🐱
                </button>

              </form>
            ) : (
              <div>
                <p className="text">
                  Et voilà c'est changé ! <br />
                  Bisou Blouchon !
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

export default ModifyHuman;

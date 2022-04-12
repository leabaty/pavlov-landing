import React, { useState } from "react";

import { BsTelephoneOutbound } from "react-icons/bs";

function Human() {
  const [mobileNumber, showMobileNumber] = useState(false);

  const handleClick = () => {
    showMobileNumber(true);
  };

  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Mon Maître</h1>

          <div className="content__inside">
            <p className="text">J'habite au 15 Faubourg des Balmettes.</p>

            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.759270574365!2d6.12097361473988!3d45.896127512540524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b8ffec208b79d%3A0x390e4c79c540227b!2s15%20Fbg%20des%20Balmettes%2C%2074000%20Annecy!5e0!3m2!1sfr!2sfr!4v1649756682296!5m2!1sfr!2sfr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="15 faubourg des balmettes Annecy"
              ></iframe>
            </div>

            <p className="text">
              Voici le numéro de téléphone de mon maître, au cas où :
            </p>

            {mobileNumber ? (
              <div>
                <button
                  href="tel:0033695100269"
                  className="btn btn--medium btn--call"
                >
                  <BsTelephoneOutbound className="btn__icon" /> 06 95 10 02 69
                </button>
              </div>
            ) : (
              <div>
                <button className="btn btn--medium" onClick={handleClick}>
                  Cliquez pour révéler
                </button>
              </div>
            )}

            <p className="text">
              Merci de ne pas m'enfermer la nuit chez vous, même si je semble vouloir m'attarder... 🐱
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Human;

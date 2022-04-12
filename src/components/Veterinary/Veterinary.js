import React from "react";

import { BsTelephoneOutbound } from "react-icons/bs";

import "./Veterinary.scss";

function Veterinary() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Mon vétérinaire</h1>

          <div className="content__inside">
            <p className="text">
              En cas de problème (<span className="underlined">Et uniquement en cas de problème</span> !) si vous n'arrivez pas à joindre mon maître,
              vous pouvez m'amener directement chez mon vétérinaire, au <span className="bold">4 bis Rue Saint-Etienne, 74960 Annecy</span> :
            </p>

            <button href="tel:0033450513333" className="btn btn--medium">
              
            <BsTelephoneOutbound className="btn__icon"/> 04 50 51 33 33
            </button>

            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11106.949957891291!2d6.1132542!3d45.8965631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85b9698633a084aa!2sClinique%20v%C3%A9t%C3%A9rinaire%20du%20Thiou!5e0!3m2!1sfr!2sfr!4v1649759971018!5m2!1sfr!2sfr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinique vétérinaire du Thiou"
              ></iframe>
            </div>

            <p className="text">
              Pour votre sécurité et la mienne, je suis à jour de mes vaccins,
              je porte un collier antipuce, je suis vermifugé et je suis pucé.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Veterinary;

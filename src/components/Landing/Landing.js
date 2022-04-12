import React from "react";

import "./Landing.scss";

import { BiHomeHeart } from "react-icons/bi";
import { GiDogBowl } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";

import pavlov from "../../assets/images/pavlov.svg"

function Landing() {
  return (
    <>
      <div className="page">
        <div className="container">
          <h1 className="title title--medium">Bonjour !</h1>

          <div className="container__inside">
            <p className="text">
              Je m'appelle Pavlov. <br /> Je suis un chat très curieux, et
              j'aime donc me promener et rencontrer de nouveaux humains. <br />
              Mais je ne suis pas perdu pour autant !
            </p>

            <p className="text">
              Voici quelques liens pour vous aider à mieux me connaître :
            </p>

            <div className="landing__cards">
              <div className="landing__card">
                <BiHomeHeart className="landing__card__icon" />
                <h2 className="title--nano">Mon maître</h2>
              </div>

              <div className="landing__card">
                <GiDogBowl className="landing__card__icon" />
                <h2 className="title--nano">Mon alimentation</h2>
              </div>

              <div className="landing__card">
                <MdOutlineHealthAndSafety className="landing__card__icon" />
                <h2 className="title--nano">Mon véto</h2>
              </div>
            </div>

            <img className="landing__img" src={pavlov} alt="pavlov" />

            <h2 className="title title--small">Merci de prendre soin de moi !</h2>

          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;

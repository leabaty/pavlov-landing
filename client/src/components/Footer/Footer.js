import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

import { RiHomeHeartLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className="footer__container app__footer">
      <div className="footer__content">
        <div className="footer__website-rights">Léa Baty © 2022</div>

        <div className="footer__website-rights">
          <Link className="footer__link" to="/changer-mon-adresse">
            <RiHomeHeartLine />
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

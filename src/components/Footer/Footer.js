import React from "react";

import "./Footer.scss";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { HiOutlineMailOpen } from "react-icons/hi";

function Footer() {
  return (
    <footer className="footer__container app__footer">
      <div className="footer__content">
        <div className="footer__website-rights">Léa Baty © 2022</div>
      </div>
    </footer>
  );
}

export default Footer;

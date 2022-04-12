import React from "react";

import "./Footer.scss";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { HiOutlineMailOpen } from "react-icons/hi";

function Footer() {
  return (
    <footer className="footer__container app__footer">
      <div className="footer__content">
        <div className="social__icons">
          <a
            className="social__icon-link"
            href="https://github.com/leabaty"
            target="_blank"
            aria-label="Github"
          >
            <AiFillGithub />
          </a>
          <a
            className="social__icon-link"
            href="https://www.linkedin.com/in/l%C3%A9a-baty-2a542375"
            target="_blank"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />
          </a>

          <a
            className="social__icon-link"
            href="mailto: leabaty.dev@gmail.com"
            target="_blank"
            aria-label="Email me"
          >
            <HiOutlineMailOpen />
          </a>
        </div>

        <div className="footer__website-rights">Léa Baty © 2022</div>
      </div>
    </footer>
  );
}

export default Footer;

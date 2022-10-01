import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaTimes, FaPaw } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import "./Navbar.scss";

function Navbar() {
  const [openedMobileMenu, setOpenMobileMenu] = useState(false);

  /* Ca permet d'ouvrir et de fermer le menu avec la petite croix/les bars */
  const handleClick = () => setOpenMobileMenu(!openedMobileMenu);

  /* Quand l'utilisateur a cliqué sur un des liens, cela ferme le menu et présente à nouveau la navbar mobile*/
  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  return (
    <>
      <nav className="navbar app__navbar">
        <div className="navbar__container">
          {/* Mobile navbar ONLY */}
          <div className="mobilemenu__navbar">
            <div className="mobilemenu__logo">
              <Link
                to="/"
                className="navbar__title"
                onClick={closeMobileMenu}
              >
                <FaPaw className="navbar__icon" alt="logo-lea-baty" />
              </Link>
            </div>

            <div className="mobilemenu__button" onClick={handleClick}>
              {openedMobileMenu ? <FaTimes /> : <HiOutlineMenuAlt3 />}
            </div>
          </div>

          <div
            className={
              openedMobileMenu ? "navbar__menu active" : "navbar__menu"
            }
          >
            {/* Logo on the left of navbar in desktop mode ONLY */}
            <div className="navbar__menu__left">
              <Link
                to="/"
                className="navbar__title"
                onClick={closeMobileMenu}
              >
                <FaPaw className="navbar__icon" alt="logo-lea-baty" />
              </Link>
            </div>

            {/* Container on the right of navbar */}
            <ul className="navbar__menu__right">
              <li className="nav-item">
                <Link
                  to="/mon-maitre"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Mon maître
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/mon-alimentation"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Mon alimentation
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/mon-veto"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Mon véto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

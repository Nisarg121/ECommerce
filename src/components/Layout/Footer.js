import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const categoriesList = useSelector((state) => state.categoryList);

  const bgModeHandler = () => {
    const body = document.getElementsByTagName("BODY")[0];
    body.classList.toggle("dark");
  };

  return (
    <footer className="footer">
      <div className="footer__center center">
        <div className="footer__row">
          <div className="footer__col">
            <a className="footer__logo" href="index.html">
              <img
                className="footer__pic footer__pic_black-desktop"
                src="img/logo.svg"
                alt=""
              />
              <img
                className="footer__pic footer__pic_white-desktop"
                src="img/logo-white.svg"
                alt=""
              />
              <img
                className="footer__pic footer__pic_black-mobile"
                src="img/logo-mobile.svg"
                alt=""
              />
              <img
                className="footer__pic footer__pic_white-mobile"
                src="img/logo-mobile-white.svg"
                alt=""
              />
            </a>
            <div className="footer__copyright">
              © 2020 - All rights reserved
            </div>
            <div className="footer__social social">
              <a
                className="social__link"
                href="https://www.instagram.com/ui8net/"
                target="_blank"
              >
                <svg className="icon icon-instagram">
                  <use xlinkHref="img/sprite.svg#icon-instagram"></use>
                </svg>
              </a>
              <a
                className="social__link"
                href="https://twitter.com/ui8"
                target="_blank"
              >
                <svg className="icon icon-twitter">
                  <use xlinkHref="img/sprite.svg#icon-twitter"></use>
                </svg>
              </a>
              <a
                className="social__link"
                href="https://www.facebook.com/ui8.net/"
                target="_blank"
              >
                <svg className="icon icon-facebook">
                  <use xlinkHref="img/sprite.svg#icon-facebook"></use>
                </svg>
              </a>
            </div>
            <label className="switch js-switch-bg">
              <input
                className="switch__input"
                type="checkbox"
                onClick={bgModeHandler}
              />
              <span className="switch__in">
                <span className="switch__tick">
                  <img
                    className="switch__pic switch__pic_moon"
                    src="img/moon.svg"
                    alt=""
                  />
                  <img
                    className="switch__pic switch__pic_sun"
                    src="img/sun.svg"
                    alt=""
                  />
                </span>
              </span>
            </label>
          </div>
          <div className="footer__col">
            <div className="footer__category">Categories</div>
            <div className="footer__menu">
              {categoriesList.length === 0 ? (
                <div className="loader centered"></div>
              ) : (
                categoriesList.map((category) => (
                  <Link
                    className="footer__link"
                    to={`/category/${category._id}`}
                    key={category._id}
                  >
                    {category.name}
                  </Link>
                ))
              )}
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__category">Legal</div>
            <div className="footer__menu">
              <a className="footer__link" href="legal-page.html">
                Terms of Service
              </a>
              <a className="footer__link" href="legal-page.html">
                Privacy Policy
              </a>
              <a className="footer__link" href="legal-page.html">
                Returns Policy
              </a>
              <a className="footer__link" href="legal-page.html">
                Shipping
              </a>
              <a className="footer__link" href="legal-page.html">
                Data Protection
              </a>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__category">Company</div>
            <div className="footer__menu">
              <a className="footer__link" href="about-us.html">
                About
              </a>
              <a className="footer__link" href="faq.html">
                Faq
              </a>
              <a className="footer__link" href="contacts.html">
                Contact
              </a>
              <a className="footer__link" href="careers-page.html">
                Careers
              </a>
              <a className="footer__link" href="#">
                Vision
              </a>
              <a className="footer__link" href="#">
                Culture
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

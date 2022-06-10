import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { aboutUs, contact, homePage } from "../../Routes/Routes";
import AllureDark from "../../assets/img/Allure-dark.svg";
import AllureWhite from "../../assets/img/Allure-white.svg";
import moon from "../../assets/img/moon.svg";
import sun from "../../assets/img/sun.svg";
import sprite from "../../assets/img/sprite.svg";

const Footer = (props) => {
  const categoriesList = useSelector((state) => state.categories.categoryList);
  const body = document.getElementsByTagName("BODY")[0];

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      body.classList.toggle("dark");
      props.setIsDark(true);
    } else {
      localStorage.setItem("theme", "white");
    }
  }, []);

  const bgModeHandler = () => {
    const isDark = body.classList.toggle("dark");
    if (isDark) {
      props.setIsDark(true);
      localStorage.setItem("theme", "dark");
    } else {
      props.setIsDark(false);
      localStorage.setItem("theme", "white");
    }
  };

  return (
    <footer className="footer">
      <div className="footer__center center">
        <div className="footer__row">
          <div className="footer__col">
            <Link className="footer__logo" to={`/${homePage}`}>
              {props.isDark ? (
                <img
                  className="header__pic header__pic_black-desktop"
                  src={AllureDark}
                  alt=""
                />
              ) : (
                <img
                  className="header__pic header__pic_black-desktop"
                  src={AllureWhite}
                  alt=""
                />
              )}
            </Link>
            <div className="footer__copyright">
              © 2020 - All rights reserved
            </div>
            <div className="footer__social social">
              <a
                className="social__link"
                href="https://www.instagram.com"
                target="_blank"
              >
                <svg className="icon icon-instagram">
                  <use xlinkHref={`${sprite}#icon-instagram`}></use>
                </svg>
              </a>
              <a
                className="social__link"
                href="https://twitter.com"
                target="_blank"
              >
                <svg className="icon icon-twitter">
                  <use xlinkHref={`${sprite}#icon-twitter`}></use>
                </svg>
              </a>
              <a
                className="social__link"
                href="https://www.facebook.com"
                target="_blank"
              >
                <svg className="icon icon-facebook">
                  <use xlinkHref={`${sprite}#icon-facebook`}></use>
                </svg>
              </a>
            </div>
            <label className="switch js-switch-bg">
              <input
                className="switch__input"
                type="checkbox"
                onClick={bgModeHandler}
                checked={props.isDark ? true : false}
              />
              <span className="switch__in">
                <span className="switch__tick">
                  <img
                    className="switch__pic switch__pic_moon"
                    src={moon}
                    alt=""
                  />

                  <img
                    className="switch__pic switch__pic_sun"
                    src={sun}
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
                <>
                  <div className="category_link">
                    <Skeleton />
                  </div>
                  <div className="category_link">
                    <Skeleton />
                  </div>
                  <div className="category_link">
                    <Skeleton />
                  </div>
                  <div className="category_link">
                    <Skeleton />
                  </div>
                  <div className="category_link">
                    <Skeleton />
                  </div>
                  <div className="category_link">
                    <Skeleton />
                  </div>
                  <div className="category_link">
                    <Skeleton />
                  </div>
                  <div className="category_link">
                    <Skeleton />
                  </div>
                </>
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
              <Link className="footer__link" to={"#"}>
                Terms of Service
              </Link>
              <Link className="footer__link" to={"#"}>
                Privacy Policy
              </Link>
              <Link className="footer__link" to={"#"}>
                Returns Policy
              </Link>
              <Link className="footer__link" to={"#"}>
                Shipping
              </Link>
              <Link className="footer__link" to={"#"}>
                Data Protection
              </Link>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__category">Company</div>
            <div className="footer__menu">
              <Link className="footer__link" to={`/${aboutUs}`}>
                About
              </Link>
              <Link className="footer__link" to={"#"}>
                Faq
              </Link>
              <Link className="footer__link" to={`/${contact}`}>
                Contact
              </Link>
              <Link className="footer__link" to={"#"}>
                Careers
              </Link>
              <Link className="footer__link" to={"#"}>
                Vision
              </Link>
              <Link className="footer__link" to={"#"}>
                Culture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

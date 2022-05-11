import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryName from "../categories/CategoryName";
import { aboutUs, contact } from "../../Routes/Routes";
import useHttp from "../../hooks/use-http";
import { toast } from "react-toastify";
import { getAllCategries } from "../../apis/Category";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../store/Category";

const Header = () => {
  const [toggleHeader, setToggleHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();
  
  let {
    sendRequest,
    status,
    data: categoriesList,
    error,
  } = useHttp(getAllCategries, true);

  useEffect(() => {
    if (status === "completed") {
      dispatch(categoryActions.addCategories(categoriesList));
    }
  }, [status]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (error) {
    return toast.error(error);
  }

  if (status === "pending") {
    categoriesList = [];
  }

  const categoryNames = categoriesList.map((categorey) => (
    <CategoryName
      key={categorey._id}
      categoryId={categorey._id}
      categoryName={categorey.name}
      onSelectCategory={() => {
        setShowMenu(false);
        setToggleHeader(false);
      }}
    />
  ));

  return (
    <header className="header js-header">
      <div className="header__center center">
        <button
          className={`header__burger js-header-burger ${
            toggleHeader ? "active" : ""
          }`}
          onClick={() => {
            setToggleHeader(!toggleHeader);
            setShowMenu(false);
            document.getElementById("scroll").classList.toggle("no-scroll");
          }}
        ></button>
        <Link className="header__logo" to="/HomePage">
          <img
            className="header__pic header__pic_black-desktop"
            src="img/logo.svg"
            alt=""
          />
          <img
            className="header__pic header__pic_white-desktop"
            src="img/logo-white.svg"
            alt=""
          />
          <img
            className="header__pic header__pic_black-mobile"
            src="img/logo-mobile.svg"
            alt=""
          />
          <img
            className="header__pic header__pic_white-mobile"
            src="img/logo-mobile-white.svg"
            alt=""
          />
        </Link>
        <div className="header__control">
          <div className="header__item header__item_hidden">
            <div
              className={`header__search search js-search  ${
                showSearch ? "show" : ""
              }`}
              onClick={() => setShowSearch(!showSearch)}
            >
              <div className="search__wrap">
                <input
                  className="search__input"
                  type="text"
                  placeholder="Eye care products for tired eyes"
                />
              </div>
              <button className={`search__btn js-search-btn`}>
                <svg className="icon icon-search">
                  <use xlinkHref="img/sprite.svg#icon-search"></use>
                </svg>
              </button>
            </div>
          </div>
          <div className="header__item">
            <a
              className="header__link header__link_cart active"
              href="cart.html"
            >
              <svg className="icon icon-cart">
                <use xlinkHref="img/sprite.svg#icon-cart"></use>
              </svg>
            </a>
            <div className="header__body">
              <div className="basket basket_header">
                <div className="basket__list">
                  <div className="basket__item">
                    <a className="basket__preview" href="#">
                      <img
                        className="basket__pic"
                        src="img/products/product-pic-4.png"
                        alt=""
                      />
                    </a>
                    <div className="basket__details">
                      <a className="basket__product" href="#">
                        Eye Mask Gel
                      </a>
                      <div className="basket__price">
                        <div className="basket__old">$127</div>
                        <div className="basket__actual">$180</div>
                      </div>
                    </div>
                    <button className="basket__remove">
                      <svg className="icon icon-close">
                        <use xlinkHref="img/sprite.svg#icon-close"></use>
                      </svg>
                    </button>
                  </div>
                  <div className="basket__item">
                    <a className="basket__preview" href="#">
                      <img
                        className="basket__pic"
                        src="img/products/product-pic-6.png"
                        alt=""
                      />
                    </a>
                    <div className="basket__details">
                      <a className="basket__product" href="#">
                        Day Eye Cream
                      </a>
                      <div className="basket__price">
                        <div className="basket__actual">$97</div>
                      </div>
                    </div>
                    <button className="basket__remove">
                      <svg className="icon icon-close">
                        <use xlinkHref="img/sprite.svg#icon-close"></use>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="basket__total">
                  <div className="basket__text">Total:</div>
                  <div className="basket__text">$201</div>
                </div>
                <div className="basket__btns">
                  <a className="basket__btn btn btn_green" href="checkout.html">
                    Checkout{" "}
                  </a>
                  <a className="basket__btn btn btn_border" href="cart.html">
                    Edit Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="header__item header__item_hidden">
            <Link className="header__link" to={'/login'}>
              <svg className="icon icon-user">
                <use xlinkHref="img/sprite.svg#icon-user"></use>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`header__menu menu js-menu ${
          toggleHeader ? "visible" : ""
        } ${showMenu ? "left" : ""}`}
      >
        <div className="menu__center center">
          <form className="menu__search search">
            <div className="search__wrap">
              <input
                className="search__input"
                type="text"
                placeholder="Search"
              />
            </div>
            <button className="search__btn">
              <svg className="icon icon-search">
                <use xlinkHref="img/sprite.svg#icon-search"></use>
              </svg>
            </button>
          </form>
          <div className="menu__container">
            <div className="menu__list js-menu-list">
              <Link
                className="menu__item active"
                to="/HomePage"
                onClick={() => setToggleHeader(false)}
              >
                Home
              </Link>
              <div
                className={`menu__item js-menu-item ${
                  showMenu ? "active" : ""
                }`}
                onClick={() => setShowMenu(!showMenu)}
              >
                <div className="menu__head js-menu-head">
                  Categories
                  <svg className="icon icon-arrow-next">
                    <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                  </svg>
                </div>
                <div className="menu__body js-menu-body">
                  <button className="menu__close js-menu-close">
                    <svg className="icon icon-close">
                      <use xlinkHref="img/sprite.svg#icon-close"></use>
                    </svg>
                  </button>
                  <button className="menu__back js-menu-back">
                    <svg className="icon icon-arrow-prev">
                      <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                    </svg>
                  </button>
                  <div className="menu__group">{categoryNames}</div>
                </div>
              </div>
              <Link
                className="menu__item"
                to={aboutUs}
                onClick={() => setToggleHeader(false)}
              >
                About
              </Link>
              <Link
                className="menu__item"
                to={contact}
                onClick={() => setToggleHeader(false)}
              >
                Contact
              </Link>
            </div>
          </div>
          <Link className="menu__btn btn btn_green btn_wide" to={'/login'}>
            Login
          </Link>
          <div className="menu__social">
            <a
              className="menu__link"
              href="https://www.instagram.com/ui8net/"
              target="_blank"
            >
              <svg className="icon icon-instagram">
                <use xlinkHref="img/sprite.svg#icon-instagram"></use>
              </svg>
            </a>
            <a
              className="menu__link"
              href="https://twitter.com/ui8"
              target="_blank"
            >
              <svg className="icon icon-twitter">
                <use xlinkHref="img/sprite.svg#icon-twitter"></use>
              </svg>
            </a>
            <a
              className="menu__link"
              href="https://www.facebook.com/ui8.net/"
              target="_blank"
            >
              <svg className="icon icon-facebook">
                <use xlinkHref="img/sprite.svg#icon-facebook"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

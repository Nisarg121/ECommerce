import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryName from "../categories/CategoryName";
import { aboutUs, cart, contact, homePage } from "../../Routes/Routes";
import useHttp from "../../hooks/use-http";
import { toast } from "react-toastify";
import { getAllCategries } from "../../apis/Category";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../store/Category";
import { clearToken } from "../../store/Auth";
import CartHeader from "../cart/CartHeader";
import { clearCart } from "../../store/cart";
import AllureDark from "../../assets/img/Allure-dark.svg";
import AllureWhite from "../../assets/img/Allure-white.svg";
import sprite from "../../assets/img/sprite.svg";

const Header = (props) => {
  const [toggleHeader, setToggleHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let {
    sendRequest,
    status,
    data: categoriesList,
    error,
  } = useHttp(getAllCategries, true);

  useEffect(() => {
    if (status === "completed" && !error) {
      dispatch(categoryActions.addCategories(categoriesList));
    }
  }, [status, sendRequest, categoriesList, error, dispatch]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const logOutHandler = () => {
    localStorage.clear();
    dispatch(clearToken());
    dispatch(clearCart());
    toast.success("LogOut Successfully.");
  };

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
        <Link className="header__logo" to={`/${homePage}`}>
          {props.isDark ? (
            <img className="header__pic " src={AllureDark} alt="" />
          ) : (
            <img className="header__pic" src={AllureWhite} alt="" />
          )}
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
                  <use xlinkHref={`${sprite}#icon-search`}></use>
                </svg>
              </button>
            </div>
          </div>
          <CartHeader />
          <div className="header__item header__item_hidden">
            {isAuth ? (
              <Link className="header__link" onClick={logOutHandler} to={"#"}>
                <svg className="icon icon-user">
                  <use xlinkHref={`${sprite}#icon-signOut`}></use>
                </svg>
              </Link>
            ) : (
              <Link className="header__link" to={"/login"}>
                <svg className="icon icon-user">
                  <use xlinkHref={`${sprite}#icon-user`}></use>
                </svg>
              </Link>
            )}
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
                to={`/${cart}`}
                onClick={() => setToggleHeader(false)}
              >
                My Cart
              </Link>
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
          {isAuth ? (
            <Link
              className="menu__btn btn btn_green btn_wide"
              to={"#"}
              onClick={() => {
                setToggleHeader(false);
                logOutHandler();
              }}
            >
              Logout
            </Link>
          ) : (
            <Link
              className="menu__btn btn btn_green btn_wide"
              to={"/login"}
              onClick={() => setToggleHeader(false)}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

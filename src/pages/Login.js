import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <>
      <div class="breadcrumbs">
        <div class="breadcrumbs__center center">
          <ul class="breadcrumbs__list">
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="index.html">
                Home Page
              </a>
            </li>
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="category.html">
                Categories
              </a>
            </li>
            <li class="breadcrumbs__item">Login</li>
          </ul>
        </div>
      </div>
      <div class="login section">
        <div class="login__details">
          <div class="login__center center">
            <div class="login__stage stage">- Login</div>
            <h2 class="login__title title title_mb-lg">
              Login to Your <br />
              Account
            </h2>
            <form class="login__form">
              <div class="login__field field">
                <div class="field__label">Email Address</div>
                <div class="field__wrap">
                  <input class="field__input" type="text" name="address" />
                </div>
              </div>
              <div class="login__field field">
                <div class="field__label">Password</div>
                <div class="field__wrap">
                  <input class="field__input" type="password" name="password" />
                </div>
              </div>
              <label class="login__checkbox checkbox">
                <input
                  class="checkbox__input js-checkout-checkbox"
                  type="checkbox"
                  checked
                />
                <span class="checkbox__in">
                  <span class="checkbox__tick"></span>
                  <span class="checkbox__text">Remember me</span>
                </span>
              </label>
              <div class="login__btns">
                <button class="login__btn btn btn_green btn_wide">Login</button>
              </div>
              <div class="login__row">
                <div class="login__col">
                  <Link
                    class="login__btn btn btn_border btn_wide"
                    to={'/signUp'}
                  >
                    Create Account{" "}
                  </Link>
                </div>
                <div class="login__col">
                  <a class="login__link" href="#">
                    Forgot Password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

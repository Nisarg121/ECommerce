import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/Form/LoginForm";

const Login = () => {
  return (
    <>
      <div className="breadcrumbs">
        <div className="breadcrumbs__center center">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="index.html">
                Home Page
              </a>
            </li>
            <li className="breadcrumbs__item">Login</li>
          </ul>
        </div>
      </div>
      <div className="login section">
        <div className="login__details">
          <div className="login__center center">
            <div className="login__stage stage">- Login</div>
            <h2 className="login__title title title_mb-lg">
              Login to Your <br />
              Account
            </h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

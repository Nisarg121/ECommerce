import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/Form/LoginForm";
import { homePage } from "../Routes/Routes";

const Login = () => {
  return (
    <>
      <div className="breadcrumbs">
        <div className="breadcrumbs__center center">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to={`/${homePage}`}>
                Home Page
              </Link>
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

import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../components/Form/SignUpForm";
import { homePage } from "../Routes/Routes";

const SignUp = () => {
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
            <li className="breadcrumbs__item">Sign Up</li>
          </ul>
        </div>
      </div>
      <div className="login section">
        <div className="login__details">
          <div className="login__center center">
            <div className="login__stage stage">- Sign Up</div>
            <h2 className="login__title title title_mb-lg">Create Account</h2>
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

import React from "react";
import SignUpForm from "../components/Form/SignUpForm";

const SignUp = () => {
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

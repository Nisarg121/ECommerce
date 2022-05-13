import React from "react";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";
import { signUp } from "../../Routes/Routes";

const LoginForm = () => {
  // const {} = useHttp();
  const {
    enteredValue: enteredEmail,
    isInputInvalid: isEmailInvalid,
    valueInputHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => {
    const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return emailRegex.test(value);
  });

  const {
    enteredValue: enteredPassword,
    isInputInvalid: isPasswordInvalid,
    valueInputHandler: passChangeHandler,
    inputBlurHandler: passBlurHandler,
  } = useInput((value) => value.trim().length >= 5);

  return (
    <form className="login__form">
      <div className="login__field field">
        <div className="field__label">Email Address</div>
        <div className="field__wrap">
          <input
            className="field__input"
            type="text"
            name="address"
            style={isEmailInvalid ? { "border-color": "red" } : {}}
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </div>
      </div>
      <div className="login__field field">
        <div className="field__label">Password</div>
        <div className="field__wrap">
          <input
            className="field__input"
            type="password"
            name="password"
            style={isPasswordInvalid ? { "border-color": "red" } : {}}
            value={enteredPassword}
            onChange={passChangeHandler}
            onBlur={passBlurHandler}
          />
        </div>
      </div>
      <label className="login__checkbox checkbox">
        <input
          className="checkbox__input js-checkout-checkbox"
          type="checkbox"
        />
        <span className="checkbox__in">
          <span className="checkbox__tick"></span>
          <span className="checkbox__text">Remember me</span>
        </span>
      </label>
      <div className="login__btns">
        <button className="login__btn btn btn_green btn_wide">Login</button>
      </div>
      <div className="login__row">
        <div className="login__col">
          <Link
            className="login__btn btn btn_border btn_wide"
            to={`/${signUp}`}
          >
            Create Account
          </Link>
        </div>
        <div className="login__col">
          <Link className="login__link" to={"#"}>
            Forgot Password?
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

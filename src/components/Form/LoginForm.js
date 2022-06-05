import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../apis/User";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";
import { homePage, signUp } from "../../Routes/Routes";
import { setToken } from "../../store/Auth";
import { setUserInfo } from "../../store/UserInfo";

const LoginForm = () => {
  const {
    sendRequest,
    data: loginResponseData,
    status,
    error,
  } = useHttp(login);

  const dispatch = useDispatch();
  const navigator = useNavigate();

  useEffect(() => {
    if (status === "completed" && !error) {
      if (error) {
        toast.error(error);
      } else {
        localStorage.setItem("eComToken", loginResponseData.token);
        dispatch(setToken(loginResponseData.token));
        dispatch(setUserInfo(loginResponseData));
        toast.success("Login Successfully.");
        navigator(`/${homePage}`);
      }
    }
  }, [sendRequest, status, error, loginResponseData, dispatch, navigator]);

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

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredEmail.trim() === "" || enteredPassword.trim() === "") {
      toast.error("All fields are required!");
      return;
    }

    let errors = [];
    if (isEmailInvalid) errors.push("email formate must be xx@xx.com");
    if (isPasswordInvalid) errors.push("password lengh must be more than 5");

    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }

    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    sendRequest(loginData);
    return;
  };

  return (
    <form className="login__form" onSubmit={submitHandler}>
      <div className="login__field field">
        <div className="field__label">Email Address</div>
        <div className="field__wrap">
          <input
            className="field__input"
            type="text"
            name="address"
            style={isEmailInvalid ? { borderColor: "red" } : {}}
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
            style={isPasswordInvalid ? { borderColor: "red" } : {}}
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

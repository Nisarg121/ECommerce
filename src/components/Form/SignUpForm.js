import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signUp } from "../../apis/User";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";
import { login } from "../../Routes/Routes";

const nameErrorMsg = "Name must not be empty!";
const emailErrorMsg = "Email formate must be xx@xx.com!";
const passwordErrorMsg = "Password length must be more than 5!";

const SignUpForm = () => {
  const { sendRequest, status, error } = useHttp(signUp);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      if (error) {
        return toast.error(error);
      } else {
        navigate(`/${login}`);
        toast.success("Sign Up Successfully.");
      }
    }
  }, [sendRequest, status, error]);

  const {
    enteredValue: enteredName,
    isInputInvalid: isNameInvalid,
    valueInputHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

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
    isInputInvalid: isPassInvalid,
    valueInputHandler: passChangeHandler,
    inputBlurHandler: passBlurHandler,
  } = useInput((value) => value.trim().length >= 5);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      enteredName.trim() === "" ||
      enteredEmail.trim() === "" ||
      enteredPassword.trim() === ""
    ) {
      toast.error("All fields are required!");
      return;
    }

    let errors = [];
    if (isNameInvalid) errors.push(nameErrorMsg);
    if (isEmailInvalid) errors.push(emailErrorMsg);
    if (isPassInvalid) errors.push(passwordErrorMsg);

    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }

    const signUpData = {
      email: enteredEmail,
      name: enteredName,
      password: enteredPassword,
    };

    sendRequest(signUpData);
  };

  return (
    <form className="login__form" onSubmit={submitHandler}>
      <div className="login__wrap">
        <div className="login__status success"></div>
        <div className="login__field field">
          <div className="field__label">Name</div>
          <div className="field__wrap">
            <input
              className="field__input invalid"
              type="text"
              name="name"
              style={isNameInvalid ? { "border-color": "red" } : {}}
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
          </div>
        </div>
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
          <div className="field__label">Create Password</div>
          <div className="field__wrap">
            <input
              className="field__input"
              type="password"
              name="password"
              style={isPassInvalid ? { "border-color": "red" } : {}}
              value={enteredPassword}
              onChange={passChangeHandler}
              onBlur={passBlurHandler}
            />
          </div>
        </div>
      </div>
      <label className="login__checkbox checkbox">
        <input
          className="checkbox__input js-checkout-checkbox"
          type="checkbox"
        />
        <span className="checkbox__in">
          <span className="checkbox__tick"></span>
          <span className="checkbox__text">
            I have read and agree to
            <a className="checkbox__link">terms & conditions</a>
          </span>
        </span>
      </label>
      <div className="login__row">
        <div className="login__col">
          <button className="login__btn btn btn_green btn_wide">
            Create Account
          </button>
        </div>
        <div className="login__col">
          <Link className="login__btn btn btn_border btn_wide" to={`/${login}`}>
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;

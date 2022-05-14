import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import { toast } from "react-toastify";

const LoginRoutes = (props) => {
  const { isAuth } = useSelector((state) => state.auth);

  if (isAuth) {
    toast.error("You are already logedIn");
    return <Route path={props.path} element={<Navigate replace to="#" />} />;
  }
  return <Route path={props.path} element={props.element} />;
};

export default LoginRoutes;

import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../Routes/Routes";

const PrivateRoute = (props) => {
  const { isAuth } = useSelector((state) => state.auth);
  
  if (isAuth) {
    return props.children;
  }

  return <Navigate replace to={`/${login}`} />;
};

export default PrivateRoute;

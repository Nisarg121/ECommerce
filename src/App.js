import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./components/NotFound";
import AboutUs from "./pages/AboutUs";
import { ToastContainer } from "react-toastify";
import {
  homePage,
  aboutUs,
  contact,
  category,
  login,
  signUp,
  cart,
} from "./Routes/Routes";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import $ from "jquery";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { tokenLogin } from "./store/Auth";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./pages/Cart";

function App() {
  const routePath = useLocation();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  console.log(isAuth);

  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  const loadJquery = () => {
    // filters
    (function () {
      var filters = $(".js-filters"),
        open = filters.find(".js-filters-open"),
        wrap = filters.find(".js-filters-wrap");
      open.on("click", function () {
        open.toggleClass("active");
        wrap.slideToggle();
      });
    })();
  };

  useEffect(() => {
    loadJquery();
    dispatch(tokenLogin());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to={homePage} />} />
          <Route
            path={login}
            element={
              isAuth ? <Navigate replace to={`/${homePage}`} /> : <Login />
            }
          />
          <Route path={cart} element={isAuth ? <Cart /> : <Navigate replace to={`/${login}`} />} />
          <Route path={signUp} element={<SignUp />} />
          <Route path={homePage} element={<Homepage />} />
          <Route path={aboutUs} element={<AboutUs />} />
          <Route path={category} element={<Category />} />
          <Route path={contact} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

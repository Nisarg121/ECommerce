import React, { Suspense, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import {
  homePage,
  aboutUs,
  contact,
  category,
  login,
  signUp,
  cart,
  categoryId,
  checkout,
} from "./Routes/Routes";
import { tokenLogin } from "./store/Auth";
import { useDispatch, useSelector } from "react-redux";

const Homepage = React.lazy(() => import("./pages/Homepage"));
const Login = React.lazy(() => import("./pages/Login"));
const Cart = React.lazy(() => import("./pages/Cart"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Category = React.lazy(() => import("./pages/Category"));
const Contact = React.lazy(() => import("./pages/Contact"));
const CheckOut = React.lazy(() => import("./pages/CheckOut"));

function App() {
  const routePath = useLocation();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const onTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    onTop();
  }, [routePath]);

  useEffect(() => {
    dispatch(tokenLogin());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Navigate replace to={homePage} />} />
            <Route
              path={login}
              element={
                isAuth ? <Navigate replace to={`/${homePage}`} /> : <Login />
              }
            />
            <Route path={cart} element={<Cart />} />
            <Route path={signUp} element={<SignUp />} />
            <Route path={homePage} element={<Homepage />} />
            <Route path={aboutUs} element={<AboutUs />} />
            <Route path={categoryId} element={<Category />} />
            <Route path={category} element={<Category />} />
            <Route path={contact} element={<Contact />} />
            <Route path={checkout} element={<CheckOut />} />
            {/* <Route path={"product"} element={<ProductDetail />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;

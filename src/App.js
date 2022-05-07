import React from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./components/NotFound";
import AboutUs from "./pages/AboutUs";
import { ToastContainer } from "react-toastify";
import { homePage, aboutUs, Products } from "./Routes/Routes";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/homePage" />} />
          <Route path={homePage} element={<Homepage />} />
          <Route path={aboutUs} element={<AboutUs />} />
          <Route path={Products} element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

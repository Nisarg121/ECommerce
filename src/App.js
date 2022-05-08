import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./components/NotFound";
import AboutUs from "./pages/AboutUs";
import { ToastContainer } from "react-toastify";
import { homePage, aboutUs, Products } from "./Routes/Routes";
import Category from "./pages/Category";
import $ from "jquery";

function App() {
  const loadJquery = () => {
    // header
    (function () {
      var header = $(".js-header"),
        burger = header.find(".js-header-burger"),
        menu = header.find(".js-menu"),
        items = menu.find(".js-menu-item"),
        close = menu.find(".js-menu-close"),
        back = menu.find(".js-menu-back"),
        html = $("html"),
        body = $("body");
      burger.on("click", function () {
        burger.toggleClass("active");
        menu.toggleClass("visible");
        html.toggleClass("no-scroll");
        body.toggleClass("no-scroll");
      });
      items.each(function () {
        var item = $(this),
          head = item.find(".js-menu-head");

        head.on("click", function () {
          if (!item.hasClass("active")) {
            menu.removeClass("left");
            items.removeClass("active");
            menu.addClass("left");
            item.addClass("active");
          } else {
            items.removeClass("active");
            menu.removeClass("left");
          }
        });
        back.on("click", function () {
          menu.removeClass("left");
          items.removeClass("active");
        });
        close.on("click", function () {
          items.removeClass("active");
          burger.toggleClass("active");
          menu.toggleClass("visible");
          menu.removeClass("left");
          html.removeClass("no-scroll");
          body.removeClass("no-scroll");
        });
      });
    })();

    // search
    (function () {
      var search = $(".js-search"),
        btn = search.find(".js-search-btn");
      btn.on("click", function () {
        search.toggleClass("show");
      });
    })();

    
  };

  useEffect(() => {
    loadJquery();
  });

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

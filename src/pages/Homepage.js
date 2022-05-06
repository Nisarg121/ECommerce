import React from "react";
import About from "../components/about/About";
import Categories from "../components/categories/Categories";
import Reviews from "../components/customerReviews/Reviews";
import MainSection from "../components/MainSection/MainSection";
import Products from "../components/products/Products";

const Homepage = () => {
  return (
    <>
      <MainSection />
      <Categories />
      <Products />
      <About />
      <Reviews />
    </>
  );
};

export default Homepage;

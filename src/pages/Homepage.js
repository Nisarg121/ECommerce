import React from "react";
import About from "../components/about/About";
import CategorieList from "../components/categories/CategorieList";
import Reviews from "../components/customerReviews/Reviews";
import Banner from "../components/Banner/Banner";
import ProductList from "../components/product/ProductList";

const Homepage = () => {
  return (
    <>
      <Banner />
      <CategorieList />
      <ProductList />
      <About />
      <Reviews />
    </>
  );
};

export default Homepage;

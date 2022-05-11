import React from "react";
import AllCategoriesProducts from "../components/categories/AllCategoriesProducts";
import CategoryNavigation from "../components/categories/CategoryNavigation";

const Category = () => {
  return (
    <>
      <CategoryNavigation />
      <AllCategoriesProducts />
    </>
  );
};

export default Category;

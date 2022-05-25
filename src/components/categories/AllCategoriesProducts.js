import React from "react";
import CategoryTitle from "./CategoryTitle";
import ProductFilters from "./ProductFilters";

const AllCategoriesProducts = () => {

  return (
    <div className="products products_full section">
      <div className="products__center center">
        <CategoryTitle />
        <ProductFilters />
      </div>
    </div>
  );
};

export default AllCategoriesProducts;

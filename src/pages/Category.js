import React from "react";
import { Link } from "react-router-dom";
import AllCategoriesProducts from "../components/categories/AllCategoriesProducts";
import { homePage } from "../Routes/Routes";

const Category = () => {
  return (
    <>
      <div className="breadcrumbs">
        <div className="breadcrumbs__center center">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to={`/${homePage}`}>
                Home Page
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to={"#"}>
                Navigation
              </Link>
            </li>
            <li className="breadcrumbs__item">All Category</li>
          </ul>
        </div>
      </div>
      <AllCategoriesProducts />
    </>
  );
};

export default Category;

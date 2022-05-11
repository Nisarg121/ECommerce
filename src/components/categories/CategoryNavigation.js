import React from "react";
import { Link } from "react-router-dom";

const CategoryNavigation = () => {
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__center center">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={"/HomePage"}>
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
  );
};

export default CategoryNavigation;

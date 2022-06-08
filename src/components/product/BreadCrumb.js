import React from "react";
import { Link } from "react-router-dom";
import { category, homePage } from "../../Routes/Routes";

const BreadCrumb = (props) => {
  const { productInfo } = props.productInfo;
  return (
    <div className="breadcrumbs breadcrumbs_mb-md">
      <div className="breadcrumbs__center center">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={`/${homePage}`}>
              Home Page
            </Link>
          </li>
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={`/${category}`}>
              Categories
            </Link>
          </li>
          <li className="breadcrumbs__item">
            <Link
              className="breadcrumbs__link"
              to={`/${category}/${productInfo.categoryId._id}`}
            >
              {productInfo.categoryId.name}
            </Link>
          </li>
          <li className="breadcrumbs__item">{productInfo.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;

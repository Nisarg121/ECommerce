import React from "react";
import { Link } from "react-router-dom";

const CategoryName = (props) => {
  return (
    <Link className="menu__link" to={`/products/${props.categoryId}`}>
      {props.categoryName}
    </Link>
  );
};

export default CategoryName;

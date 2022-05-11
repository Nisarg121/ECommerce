import React from "react";
import { Link } from "react-router-dom";

const CategoryName = (props) => {
  return (
    <Link className="menu__link" to={`/about`} onClick={() => props.onSelectCategory(false)} >
      {props.categoryName}
    </Link>
  );
};

export default CategoryName;

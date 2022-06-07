import React from "react";
import { Link } from "react-router-dom";
import { category } from "../../Routes/Routes";

const CategoryName = (props) => {
  return (
    <Link
      className="menu__link"
      to={`/${category}/${props.categoryId}`}
      onClick={() => props.onSelectCategory(false)}
    >
      {props.categoryName}
    </Link>
  );
};

export default CategoryName;

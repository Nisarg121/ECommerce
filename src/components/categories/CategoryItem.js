import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  return (
    <div className="categories__slide">
      <Link className="categories__item" to={`category/${props.id}`}>
        <div className="categories__icon">
          <img
            className="categories__pic"
            src="img/categories/shopping-bag.svg"
            alt={props.name}
          />
        </div>
        <div className="categories__text">{props.name}</div>
      </Link>
    </div>
  );
};

export default CategoryItem;

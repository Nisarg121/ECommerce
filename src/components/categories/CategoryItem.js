import React from "react";
import { Link } from "react-router-dom";
import { categoryImageUrl } from "../../Routes/Routes";

const CategoryItem = (props) => {
  return (
    <div className="categories__slide">
      <div className="categories__item" to={`/category/${props.id}`}>
        <div className="categories__icon">
          <img
            className="categories__pic"
            src={`${categoryImageUrl}/${props.img}`}
            alt={props.name}
          />
        </div>
        <div className="categories__text">{props.name}</div>
      </div>
    </div>
  );
};

export default CategoryItem;

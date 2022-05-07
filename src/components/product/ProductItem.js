import React from "react";
import { Link } from "react-router-dom";
import { productImageUrl } from "../../Routes/Routes";

const ProductItem = (props) => {
  return (
    <div className="product">
      <div className="product__view">
        <Link className="product__preview" to={`products/${props.id}`}>
          <img
            className="product__pic"
            src={`${productImageUrl}/${props.image}`}
            alt={props.name}
            onError={(e) => (
              (e.target.onerror = null),
              (e.target.src = "img/mstile-310x310.png")
            )}
          />
        </Link>
        <a className="product__btn btn btn_green" href="cart.html">
          Add to Cart
        </a>
      </div>
      <a className="product__name" href="product.html">
        {props.name}
      </a>
      <div className="product__details">
        <div className="product__category green">{props.name}</div>
        <div className="product__price">
          <span className="product__actual">${props.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

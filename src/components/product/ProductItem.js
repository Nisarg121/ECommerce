import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { manageCart } from "../../apis/Cart";
import { productImageUrl } from "../../Routes/Routes";
import { addToCart } from "../../store/cart";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = async (productInfo) => {
    try {
      await manageCart({
        productId: productInfo.productId,
        cartOperation: "inc",
      });

      dispatch(addToCart(productInfo));
      toast.success("product added to the Cart.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="product">
      <div className="product__view">
        <Link className="product__preview" to={`products/${props.id}`}>
          <img
            className="product__pic"
            src={`${productImageUrl}/${props.image}`}
            alt={props.name}
            onError={(e) =>
              (e.target.onerror = null)(
                (e.target.src = "img/mstile-310x310.png")
              )
            }
          />
        </Link>
        <div
          className="product__btn btn btn_green centered"
          onClick={() =>
            addToCartHandler({
              productId: props.id,
              name: props.name,
              price: props.price,
              productImage: props.image,
            })
          }
        >
          Add to Cart
        </div>
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

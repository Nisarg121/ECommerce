import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { manageCart } from "../../apis/Cart";
import { cart, login, product, productImageUrl } from "../../Routes/Routes";
import { addToCart } from "../../store/cart";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);

  const addToCartHandler = async (productInfo) => {
    try {
      if (!isAuth) {
        return Navigate(`/${login}`);
      }
      await manageCart({
        productId: productInfo.productId,
        cartOperation: "inc",
      });

      console.log(productInfo);
      dispatch(addToCart(productInfo));
      Navigate(`/${cart}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="product">
      <div className="product__view">
        <Link className="product__preview" to={`/${product}/${props.id}`}>
          <img
            className="product__pic"
            src={`${productImageUrl}/${props.image}`}
            alt={props.name}
            onError={(e) => {
              e.target.src = "img/mstile-310x310.png";
            }}
          />
        </Link>
        <button
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
        </button>
      </div>
      <div className="product__name">{props.name}</div>
      <div className="product__details">
        <div className="product__category green">{props.category.name}</div>
        <div className="product__price">
          <span className="product__actual">${props.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { manageCart } from "../../apis/Cart";
import { productImageUrl } from "../../Routes/Routes";
import { removeFromCart } from "../../store/cart";
import sprite from "../../assets/img/sprite.svg";

const CartPopulate = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const removeItemFromCart = async (productId) => {
    try {
      await manageCart({
        productId,
        cartOperation: "del",
      });

      dispatch(removeFromCart(productId));
      return toast.success("product remove successfully.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="basket__list">
        {cart.items.map((product) => (
          <div className="basket__item" key={product.productId}>
            <div className="basket__preview">
              <img
                className="basket__pic"
                src={`${productImageUrl}/${product.productImage}`}
                alt=""
                onError={(e) =>
                  (e.target.onerror = null)(
                    (e.target.src = "img/mstile-310x310.png")
                  )
                }
              />
            </div>
            <div className="basket__details">
              <div className="basket__product">{product.name}</div>
              <div className="basket__price">
                <div className="basket__actual">{`$${product.price}`}</div>
              </div>
            </div>
            <button
              className="basket__remove"
              onClick={() => removeItemFromCart(product.productId)}
            >
              <svg className="icon icon-close">
                <use xlinkHref={`${sprite}#icon-close`}></use>
              </svg>
            </button>
          </div>
        ))}
      </div>
      <div className="basket__total">
        <div className="basket__text">Total:</div>
        <div className="basket__text">{`$${cart.total + 15}`}</div>
      </div>
      <div className="basket__btns">
        <Link className="basket__btn btn btn_green" to={"/checkout"}>
          Checkout
        </Link>
        <Link className="basket__btn btn btn_border" to={"/cart"}>
          Edit Cart
        </Link>
      </div>
    </>
  );
};

export default CartPopulate;

import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { manageCart } from "../../apis/Cart";
import { removeFromCart } from "../../store/cart";
import sprite from "../../assets/img/sprite.svg";

const CartRemove = (props) => {
  const dispatch = useDispatch();
  const removeProduct = async () => {
    try {
      await manageCart({
        productId: props.productId,
        cartOperation: "del",
      });

      dispatch(removeFromCart(props.productId));
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <button className="cart__remove" onClick={removeProduct}>
      <svg className="icon icon-close">
        <use xlinkHref={`${sprite}#icon-close`}></use>
      </svg>
    </button>
  );
};

export default CartRemove;

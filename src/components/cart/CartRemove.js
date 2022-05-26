import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { manageCart } from "../../apis/Cart";
import { removeFromCart } from "../../store/cart";

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
    <button class="cart__remove" onClick={removeProduct}>
      <svg class="icon icon-close">
        <use xlinkHref="img/sprite.svg#icon-close"></use>
      </svg>
    </button>
  );
};

export default CartRemove;

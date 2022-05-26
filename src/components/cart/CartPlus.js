import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { manageCart } from "../../apis/Cart";
import { incQuantity } from "../../store/cart";

const CartPlus = (props) => {
  const dispatch = useDispatch();
  const quantityInc = async () => {
    try {
      await manageCart({
        productId: props.productId,
        cartOperation: "inc",
      });

      dispatch(incQuantity(props.productId));
    } catch (error) {
      return toast.error(error);
    }
  };

  return (
    <button
      class="counter__btn counter__btn_plus js-counter-plus"
      type="button"
      onClick={quantityInc}
    >
      <svg class="icon icon-arrow-next">
        <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
      </svg>
    </button>
  );
};

export default CartPlus;

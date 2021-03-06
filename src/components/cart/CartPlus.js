import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { manageCart } from "../../apis/Cart";
import { incQuantity } from "../../store/cart";
import sprite from "../../assets/img/sprite.svg";

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
      className="counter__btn counter__btn_plus js-counter-plus"
      type="button"
      onClick={quantityInc}
    >
      <svg className="icon icon-arrow-next">
        <use xlinkHref={`${sprite}#icon-arrow-next`}></use>
      </svg>
    </button>
  );
};

export default CartPlus;

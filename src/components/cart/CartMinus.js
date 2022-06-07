import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { manageCart } from "../../apis/Cart";
import { decQuantity } from "../../store/cart";
import sprite from "../../assets/img/sprite.svg";

const CartMinus = (props) => {
  const dispatch = useDispatch();
  const quantityDec = async () => {
    try {
      await manageCart({
        productId: props.productId,
        cartOperation: "dec",
      });

      dispatch(decQuantity(props.productId));
    } catch (error) {
      return toast.error(error);
    }
  };
  return (
    <button
      className="counter__btn counter__btn_minus js-counter-minus"
      type="button"
      onClick={quantityDec}
    >
      <svg className="icon icon-arrow-prev">
        <use xlinkHref={`${sprite}#icon-arrow-prev`}></use>
      </svg>
    </button>
  );
};

export default CartMinus;

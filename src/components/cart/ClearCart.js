import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { manageCart } from "../../apis/Cart";
import { clearCart } from "../../store/cart";

const ClearCart = (props) => {
  const dispatch = useDispatch();
  const clearCartHandler = async () => {
    try {
      await manageCart({
        productId: props.productId,
        cartOperation: "clr",
      });

      dispatch(clearCart());
    } catch (error) {
      return toast.error(error);
    }
  };
  return (
    <button className="cart__btn btn btn_border" onClick={clearCartHandler}>
      Clear All
    </button>
  );
};

export default ClearCart;

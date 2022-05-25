import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getCart } from "../../apis/Cart";
import useHttp from "../../hooks/use-http";
import { initializeCart } from "../../store/cart";
import CartPopulate from "./CartPopulate";

const CartHeader = () => {
  const cart = useSelector((state) => state.cart);
  const { isAuth } = useSelector((state) => state.auth);
  const { sendRequest, status, data: cartData, error } = useHttp(getCart, true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "completed" && !error) {
      dispatch(initializeCart(cartData));
    }
  }, [status, error, cartData, dispatch]);

  useEffect(() => {
    if (isAuth) {
      sendRequest();
    }
  }, [sendRequest, isAuth]);

  if (error) {
    return toast.error(error);
  }

  if (status === "pending") {
    return (
      <div className="header__item">
        <a className="header__link header__link_cart active" href="cart.html">
          <svg className="icon icon-cart">
            <use xlinkHref="img/sprite.svg#icon-cart"></use>
          </svg>
        </a>
        <div className="header__body">
          <div className="basket basket_header">
            <div className="loader centered">loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="header__item">
      <div className="header__link header__link_cart active">
        <svg className="icon icon-cart">
          <use xlinkHref="img/sprite.svg#icon-cart"></use>
        </svg>
      </div>
      <div className="header__body">
        <div className="basket basket_header">
          {cart.items.length > 0 ? (
            <CartPopulate />
          ) : (
            <>
              <div className="basket__total">
                <div className="basket__text">Your Cart Is Empty</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartHeader;

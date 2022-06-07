import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getCart } from "../../apis/Cart";
import useHttp from "../../hooks/use-http";
import { initializeCart } from "../../store/cart";
import CartPopulate from "./CartPopulate";
import sprite from "../../assets/img/sprite.svg";
import { Link } from "react-router-dom";

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

  if (status === "pending" && isAuth === true) {
    return (
      <div className="header__item">
        <div className="header__link header__link_cart">
          <svg className="icon icon-cart">
            <use xlinkHref={`${sprite}#icon-cart`}></use>
          </svg>
        </div>
        <div className="header__body">
          <div className="basket basket_header">
            <div className="basket__list">
              {cart.items.map((product) => (
                <div className="basket__item" key={product.productId}>
                  <div className="basket__preview">
                    <Skeleton />
                  </div>
                  <div className="basket__details">
                    <div className="basket__product">
                      <Skeleton />
                    </div>
                    <div className="basket__price">
                      <div className="basket__actual">
                        <Skeleton />
                      </div>
                    </div>
                  </div>
                  <button className="basket__remove">
                    <Skeleton />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="header__item">
      <Link className="header__link header__link_cart active" to={`/cart`}>
        <svg className="icon icon-cart">
          <use xlinkHref={`${sprite}#icon-cart`}></use>
        </svg>
      </Link>
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

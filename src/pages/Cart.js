import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemList from "../components/cart/CartItemList";
import CartTotal from "../components/cart/CartTotal";
import ClearCart from "../components/cart/ClearCart";
import { cart, category, homePage } from "../Routes/Routes";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <>
      <div className="breadcrumbs">
        <div className="breadcrumbs__center center">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to={`/${homePage}`}>
                Home Page
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to={`/${category}`}>
                Categories
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="#">
                Shopping Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="cart section">
        <div className="cart__center center">
          <div className="cart__head">
            <div className="cart__box">
              <div className="cart__stage stage">- Your Cart</div>
              <h2 className="cart__title title">Shopping Cart</h2>
            </div>
            {items.length > 0 && <ClearCart />}
          </div>
          {items.length > 0 && (
            <div className="cart__row">
              <CartItemList />
              <CartTotal />
            </div>
          )}
          {items.length === 0 && (
            <div className="centered checkout__container">
              <div className="display js-checkout-item">
                <div className="checkout__category">Your Cart Is Empty</div>
                <Link to={`/${category}`}>
                  <button className="checkout__btn btn btn_green btn_wide js-checkout-btn">
                    shopping
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

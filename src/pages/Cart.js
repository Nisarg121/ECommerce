import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemList from "../components/cart/CartItemList";
import CartTotal from "../components/cart/CartTotal";
import ClearCart from "../components/cart/ClearCart";
import { category } from "../Routes/Routes";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  console.log(items);
  return (
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
          <div classNameName="centered checkout__container">
            <div className="checkout__item js-checkout-item">
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
  );
};

export default Cart;

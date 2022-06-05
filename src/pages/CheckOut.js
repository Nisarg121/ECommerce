import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutCart from "../components/checkout/CheckoutCart";
import CheckoutDetails from "../components/checkout/CheckoutDetails";
import { cart, category, homePage } from "../Routes/Routes";

const CheckOut = () => {
  const { items: cartProducts } = useSelector((state) => state.cart);

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
              <Link className="breadcrumbs__link" to={`/${cart}`}>
                Shopping Cart
              </Link>
            </li>
            <li className="breadcrumbs__item">Checkout</li>
          </ul>
        </div>
      </div>
      <div className="checkout section js-checkout">
        <div className="checkout__center center">
          <div className="checkout__stage stage">- Almost There</div>
          <h2 className="checkout__title title title_mb-lg">Checkout</h2>
          {cartProducts.length > 0 && (
            <div className="checkout__row">
              <CheckoutDetails />
              <CheckoutCart />
            </div>
          )}
          {cartProducts.length === 0 && (
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

export default CheckOut;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkout } from "../../Routes/Routes";

const CartTotal = () => {
  const { total } = useSelector((state) => state.cart);

  return (
    <div className="cart__col">
      <div className="cart__receipt">
        <div className="cart__category">Cart Total</div>
        <div className="cart__wrap">
          <div className="cart__line">
            <div className="cart__text">Subtotal:</div>
            <div className="cart__text">${total.toFixed(2)}</div>
          </div>
          <div className="cart__line">
            <div className="cart__text">Shipping:</div>
            <div className="cart__text">$15</div>
          </div>
          <div className="cart__line cart__line_total">
            <div className="cart__text">Total:</div>
            <div className="cart__text">${Number(total + 15).toFixed(2)}</div>
          </div>
        </div>
        <Link className="cart__btn btn btn_green btn_wide" to={`/${checkout}`}>
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartTotal;

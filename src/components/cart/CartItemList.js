import React from "react";
import { useSelector } from "react-redux";
import { productImageUrl } from "../../Routes/Routes";
import CartMinus from "./CartMinus";
import CartPlus from "./CartPlus";
import CartRemove from "./CartRemove";

const CartItemList = () => {
  const { items: cartProducts } = useSelector((state) => state.cart);
  return (
    <div className="cart__col">
      <div className="cart__list">
        {cartProducts.map((product) => (
          <div className="cart__item">
            <a className="cart__preview" href="#">
              <img
                className="cart__pic"
                src={`${productImageUrl}/${product.productImage}`}
                alt=""
              />
            </a>
            <div className="cart__details">
              <a className="cart__product" href="#">
                {product.name}
              </a>
              <div className="cart__price">
                <div className="cart__actual">${product.price}</div>
              </div>
              <div className="cart__control">
                <div className="cart__counter counter js-counter">
                  <CartMinus productId={product.productId} />
                  <input
                    className="counter__input js-counter-input"
                    type="text"
                    value={product.quantity}
                    size="3"
                  />{" "}
                  <CartPlus productId={product.productId} />
                </div>
                <CartRemove productId={product.productId} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItemList;

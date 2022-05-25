import React from "react";

const Cart = () => {
  return (
    <div class="cart section">
      <div class="cart__center center">
        <div class="cart__head">
          <div class="cart__box">
            <div class="cart__stage stage">- Your Cart</div>
            <h2 class="cart__title title">Shopping Cart</h2>
          </div>
          <button class="cart__btn btn btn_border">Clear All</button>
        </div>
        <div class="cart__row">
          <div class="cart__col">
            <div class="cart__list">
              <div class="cart__item">
                <a class="cart__preview" href="#">
                  <img
                    class="cart__pic"
                    src="img/products/product-pic-4.png"
                    alt=""
                  />
                </a>
                <div class="cart__details">
                  <a class="cart__product" href="#">
                    Sleepless Night
                  </a>
                  <div class="cart__price">
                    <div class="cart__actual">$97</div>
                  </div>
                  <div class="cart__control">
                    <div class="cart__counter counter js-counter">
                      <button
                        class="counter__btn counter__btn_minus js-counter-minus"
                        type="button"
                      >
                        <svg class="icon icon-arrow-prev">
                          <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                        </svg>
                      </button>
                      <input
                        class="counter__input js-counter-input"
                        type="text"
                        value="1"
                        size="3"
                      />{" "}
                      <button
                        class="counter__btn counter__btn_plus js-counter-plus"
                        type="button"
                      >
                        <svg class="icon icon-arrow-next">
                          <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                        </svg>
                      </button>
                    </div>
                    <button class="cart__remove">
                      <svg class="icon icon-close">
                        <use xlinkHref="img/sprite.svg#icon-close"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="cart__item">
                <a class="cart__preview" href="#">
                  <img
                    class="cart__pic"
                    src="img/products/product-pic-2.png"
                    alt=""
                  />
                </a>
                <div class="cart__details">
                  <a class="cart__product" href="#">
                    Tired Eyes Cream
                  </a>
                  <div class="cart__price">
                    <div class="cart__old">$68</div>
                    <div class="cart__actual">$56</div>
                  </div>
                  <div class="cart__control">
                    <div class="cart__counter counter js-counter">
                      <button
                        class="counter__btn counter__btn_minus js-counter-minus"
                        type="button"
                      >
                        <svg class="icon icon-arrow-prev">
                          <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                        </svg>
                      </button>
                      <input
                        class="counter__input js-counter-input"
                        type="text"
                        value="1"
                        size="3"
                      />
                      <button
                        class="counter__btn counter__btn_plus js-counter-plus"
                        type="button"
                      >
                        <svg class="icon icon-arrow-next">
                          <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                        </svg>
                      </button>
                    </div>
                    <button class="cart__remove">
                      <svg class="icon icon-close">
                        <use xlinkHref="img/sprite.svg#icon-close"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cart__col">
            <div class="cart__receipt">
              <div class="cart__category">Cart Total</div>
              <div class="cart__wrap">
                <div class="cart__line">
                  <div class="cart__text">Subtotal:</div>
                  <div class="cart__text">$209</div>
                </div>
                <div class="cart__line">
                  <div class="cart__text">Tax:</div>
                  <div class="cart__text">$20.73</div>
                </div>
                <div class="cart__line">
                  <div class="cart__text">Shipping:</div>
                  <div class="cart__text">$15</div>
                </div>
                <div class="cart__line cart__line_total">
                  <div class="cart__text">Total:</div>
                  <div class="cart__text">$224</div>
                </div>
              </div>
              <a class="cart__btn btn btn_green btn_wide" href="checkout.html">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

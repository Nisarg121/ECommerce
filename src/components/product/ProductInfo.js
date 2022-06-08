import React from "react";
import sprite from "../../assets/img/sprite.svg";
import img from "../../assets/img/card-pic-1.png";
import { productImageUrl } from "../../Routes/Routes";

function ProductInfo(props) {
  const { productInfo } = props.productInfo;
  return (
    <div className="card section">
      <div className="card__center center">
        <div className="card__row">
          <div className="card__col">
            <div className="card__gallery">
              <div className="card__wrap">
                <div className="card__preview">
                  <img className="card__pic" src={`${productImageUrl}/${productInfo.productImage}`} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card__col">
            <div className="card__stage stage">- Selling Fast</div>
            <h1 className="card__title title">{productInfo.name}</h1>
            <div className="card__details">
              <div className="card__category green">
                {productInfo.categoryId.name}
              </div>
              <div className="card__prices">
                <div className="card__actual">${productInfo.price}</div>
              </div>
            </div>
            <div className="card__control">
              <div className="card__counter counter js-counter">
                <button
                  className="counter__btn counter__btn_minus js-counter-minus"
                  type="button"
                >
                  <svg className="icon icon-arrow-prev">
                    <use xlinkHref={`${sprite}#icon-arrow-prev`}></use>
                  </svg>
                </button>
                <input
                  className="counter__input js-counter-input"
                  type="text"
                  value="1"
                  size="3"
                />
                <button
                  className="counter__btn counter__btn_plus js-counter-plus"
                  type="button"
                >
                  <svg className="icon icon-arrow-next">
                    <use xlinkHref={`${sprite}#icon-arrow-next`}></use>
                  </svg>
                </button>
              </div>
              <a className="card__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;

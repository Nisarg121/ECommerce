import React, { useState } from "react";
import sprite from "../../assets/img/sprite.svg";
import img from "../../assets/img/card-pic-1.png";
import { cart, login, productImageUrl } from "../../Routes/Routes";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { manageCart } from "../../apis/Cart";
import { addToCart, addToCartWithQuantiy } from "../../store/cart";
import { toast } from "react-toastify";

function ProductInfo(props) {
  const { productInfo } = props.productInfo;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);

  const addToCartHandler = async (productInfo) => {
    try {
      if (!isAuth) {
        return Navigate(`/${login}`);
      }
      await manageCart({
        productId: productInfo.productId,
        cartOperation: "inc",
        quantity: quantity
      });

      console.log(productInfo);
      dispatch(addToCartWithQuantiy(productInfo));
      Navigate(`/${cart}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="card section">
      <div className="card__center center">
        <div className="card__row">
          <div className="card__col">
            <div className="card__gallery">
              <div className="card__wrap">
                <div className="card__preview">
                  <img
                    className="card__pic"
                    src={`${productImageUrl}/${productInfo.productImage}`}
                    alt=""
                  />
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
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  <svg className="icon icon-arrow-prev">
                    <use xlinkHref={`${sprite}#icon-arrow-prev`}></use>
                  </svg>
                </button>
                <input
                  className="counter__input js-counter-input"
                  type="text"
                  value={quantity}
                  size="3"
                  readOnly
                />
                <button
                  className="counter__btn counter__btn_plus js-counter-plus"
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <svg className="icon icon-arrow-next">
                    <use xlinkHref={`${sprite}#icon-arrow-next`}></use>
                  </svg>
                </button>
              </div>
              <button
                className="card__btn btn btn_green"
                onClick={() =>
                  addToCartHandler({
                    productId: productInfo._id,
                    name: productInfo.name,
                    price: productInfo.price,
                    productImage: productInfo.productImage,
                    quantity : quantity
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;

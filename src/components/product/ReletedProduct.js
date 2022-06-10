import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { toast } from "react-toastify";
import { manageCart } from "../../apis/Cart";
import { cart, login, productImageUrl } from "../../Routes/Routes";
import { addToCart } from "../../store/cart";
import { NextButton, PrevButton } from "../customerReviews/Button";

const ReletedProduct = (props) => {
  const { ReletedProducts } = props.productInfo;
  const setting = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    speed: 600,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };
  console.log(ReletedProducts);
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
      });

      dispatch(addToCart(productInfo));
      Navigate(`/${cart}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="slider section">
      <div className="slider__center center">
        <div className="slider__stage stage">- Explore More</div>
        <h2 className="slider__title title title_mb-lg">Related Products</h2>
        <div className="slider__container">
          <Slider {...setting} className="slider__list js-slider-products">
            {ReletedProducts.map((product) => (
              <div className="slider__slide">
                <div className="product">
                  <div className="product__view">
                    <Link
                      className="product__preview"
                      to={`/${"product"}/${product._id}`}
                    >
                      <img
                        className="product__pic"
                        src={`${productImageUrl}/${product.productImage}`}
                        alt=""
                      />
                    </Link>
                    <button
                      className="product__btn btn btn_green"
                      onClick={() =>
                        addToCartHandler({
                          productId: product._id,
                          name: product.name,
                          price: product.price,
                          productImage: product.productImage,
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="product__name">
                    {product.name}
                  </div>
                  <div className="product__details">
                    <div className="product__category green">Sun Care</div>
                    <div className="product__price">
                      <span className="product__actual">${product.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ReletedProduct;

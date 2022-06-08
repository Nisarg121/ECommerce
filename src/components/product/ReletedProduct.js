import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { productImageUrl } from "../../Routes/Routes";
import { NextButton, PrevButton } from "../customerReviews/Button";
import ProductItem from "./ProductItem";

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
                      to={`/${"product"}${product._id}`}
                    >
                      <img
                        className="product__pic"
                        src={`${productImageUrl}/${product.productImage}`}
                        alt=""
                      />
                    </Link>
                    <button className="product__btn btn btn_green">
                      Add to Cart
                    </button>
                  </div>
                  <a className="product__name" href="product.html">
                    Damaged Repair
                  </a>
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

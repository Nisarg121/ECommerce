import React from "react";
import Slider from "react-slick";
import { PrevButton, NextButton } from "./Button";

const Reviews = () => {
  const setting = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <div className="review section">
      <div className="review__center center">
        <div className="review__container">
          <div className="review__box">
            <div className="review__stage stage">- Our Reviews</div>
            <h2 className="review__title title">
              What our Customers are Saying
            </h2>
          </div>
          <div className="review__wrap">
            <Slider {...setting} className="review__slider js-slider-review">
              <div className="review__item">
                <div className="review__ava">
                  <img className="review__pic" src="img/ava-1.jpg" alt="" />
                </div>
                <div className="review__author">Amy Smith</div>
                <div className="review__text">
                  This is the best website I have ordered something from. I
                  highly recommend.
                </div>
              </div>
              <div className="review__item">
                <div className="review__ava">
                  <img className="review__pic" src="img/ava-1.jpg" alt="" />
                </div>
                <div className="review__author">Amy Smith</div>
                <div className="review__text">
                  This is the best website I have ordered something from. I
                  highly recommend. I highly recommend.
                </div>
              </div>
              <div className="review__item">
                <div className="review__ava">
                  <img className="review__pic" src="img/ava-1.jpg" alt="" />
                </div>
                <div className="review__author">Amy Smith</div>
                <div className="review__text">
                  This is the best website I have ordered something from. I
                  highly recommend.
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

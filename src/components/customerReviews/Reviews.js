import React from "react";
import $ from "jquery";

const Reviews = () => {
//   var prevArrow =
//       '<button type="button" className="slick-prev"><svg className="icon icon-arrow-prev"><use xlinkHref="img/sprite.svg#icon-arrow-prev"></use></svg></button>',
//     nextArrow =
//       '<button type="button" className="slick-next"><svg className="icon icon-arrow-next"><use xlinkHref="img/sprite.svg#icon-arrow-next"></use></svg></button>';
//   // slider review
//   $(".js-slider-review").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: prevArrow,
//     nextArrow: nextArrow,
//     dots: true,
//     speed: 600,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           adaptiveHeight: true,
//         },
//       },
//     ],
//   });

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
            <div
              className="review__slider js-slider-review"
              //   onLoad={sliderHandler}
            >
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

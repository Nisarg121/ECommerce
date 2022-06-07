import React, { useEffect } from "react";
import Slider from "react-slick";
import { toast } from "react-toastify";
import { getReviews } from "../../apis/cms";
import useHttp from "../../hooks/use-http";
import { PrevButton, NextButton } from "./Button";
import ava1 from "../../assets/img/ava-1.jpg";

const Reviews = () => {
  const { sendRequest, data: reviewData, status, error } = useHttp(getReviews);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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

  if (error) {
    return toast.error(error);
  }

  return (
    <div className="review section">
      <div className="review__center center">
        <div className="review__container">
          <div className="review__box">
            <div className="review__stage stage">- Our Reviews</div>
            <h2 className="review__title title">
              What our Customers are Saying....
            </h2>
          </div>
          {status === "completed" ? (
            <div className="review__wrap">
              <Slider {...setting} className="review__slider js-slider-review">
                {reviewData.map((review) => (
                  <div className="review__item" key={review.name}>
                    <div className="review__ava">
                      <img className="review__pic" src={ava1} alt="" />
                    </div>
                    <div className="review__author">{review.name}</div>
                    <div className="review__text">{review.description}</div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="loader centered"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

import React from "react";
import sprite from "../../assets/img/sprite.svg";

export const PrevButton = (props) => {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} slick-prev`}
      onClick={onClick}
    >
      <svg className="icon icon-arrow-prev">
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref={`${sprite}#icon-arrow-prev`}
        ></use>
      </svg>
    </button>
  );
};

export const NextButton = (props) => {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} slick-next`}
      onClick={onClick}
    >
      <svg className="icon icon-arrow-next">
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref={`${sprite}#icon-arrow-next`}
        ></use>
      </svg>
    </button>
  );
};

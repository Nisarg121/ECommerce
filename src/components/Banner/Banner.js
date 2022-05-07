import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="main section">
      <div className="main__center center">
        <div className="main__container">
          <div className="main__details">
            <div className="main__stage stage">- Skincare Products</div>
            <h1 className="main__title title">
              We Offer the Best Products for your Skin
            </h1>
            <Link className="main__btn btn btn_green" to="/HomePage">Shop Now</Link>
          </div>
          <div className="main__preview">
            <img className="main__pic" src="img/main-pic.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

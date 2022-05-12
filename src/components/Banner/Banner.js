import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getBanner } from "../../apis/Banner";
import useHttp from "../../hooks/use-http";

const Banner = () => {
  const { sendRequest, status, data, error } = useHttp(getBanner);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (error) {
    return toast.error(error);
  }
  console.log(data);
  return (
    <div className="main section">
      <div className="main__center center">
        {status === "completed" ? (
          <div className="main__container">
            <div className="main__details">
              <div className="main__stage stage">-{data.title} Products</div>
              <h1 className="main__title title">
                {data.description}
              </h1>
              <Link className="main__btn btn btn_green" to="/HomePage">
                Shop Now
              </Link>
            </div>
            <div className="main__preview">
              <img className="main__pic" src={`img/main-pic.png`} alt="" />
            </div>
          </div>
        ) : (
          <div className="loader centered"></div>
        )}
      </div>
    </div>
  );
};

export default Banner;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getBanner } from "../../apis/cms";
import useHttp from "../../hooks/use-http";
import { productImageUrl } from "../../Routes/Routes";

const Banner = () => {
  const { sendRequest, status, data: bannerInfo, error } = useHttp(getBanner);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (error) {
    return toast.error(error);
  }

  return (
    <div className="main section">
      <div className="main__center center">
        {status === "completed" ? (
          <div className="main__container">
            <div className="main__details">
              <div className="main__stage stage">
                -{bannerInfo.title} Products
              </div>
              <h1 className="main__title title">{bannerInfo.description}</h1>
              <Link className="main__btn btn btn_green" to="/HomePage">
                Shop Now
              </Link>
            </div>
            <div className="main__preview">
              <img
                className="main__pic"
                src={`${productImageUrl}/${bannerInfo.image}`}
                alt=""
                onError={(e) =>
                  (e.target.onerror = null)((e.target.src = "img/main-pic.png"))
                }
              />
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

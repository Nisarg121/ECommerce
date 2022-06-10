import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getBanner } from "../../apis/cms";
import useHttp from "../../hooks/use-http";
import { category, productImageUrl } from "../../Routes/Routes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import mainPic from "../../assets/img/main-pic.png";

const Banner = () => {
  const {
    sendRequest,
    status,
    data: bannerInfo,
    error,
  } = useHttp(getBanner, true);
  const width = window.screen.width * 0.5;

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (error) {
    return toast.error(error);
  }

  if (status === "pending") {
    return (
      <div className="main section">
        <div className="main__center center">
          <div className="main__container">
            <div className="main__details">
              <div className="main__stage stage">
                <Skeleton />
              </div>
              <h1 className="main__title title">
                <Skeleton height={75} />
              </h1>
              <div className="main__btn btn">
                <Skeleton width={width * 0.25} height={60} />
              </div>
            </div>
            <div className="main__preview">
              <Skeleton
                width={520}
                height={520}
                style={{ marginBottom: "10%", marginRight: "10%" }}
                borderRadius={64}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main section">
      <div className="main__center center">
        <div className="main__container">
          <div className="main__details">
            <div className="main__stage stage">
              -{bannerInfo.title} Products
            </div>
            <h1 className="main__title title">{bannerInfo.description}</h1>
            <Link className="main__btn btn btn_green" to={`/${category}`}>
              Shop Now
            </Link>
          </div>
          <div className="main__preview">
            <img className="main__pic" src={mainPic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

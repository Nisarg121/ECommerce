import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../apis/Product";
import Loader from "../components/Layout/Loader";
import BreadCrumb from "../components/product/BreadCrumb";
import ProductInfo from "../components/product/ProductInfo";
import ReletedProduct from "../components/product/ReletedProduct";
import useHttp from "../hooks/use-http";

const ProductDetail = () => {
  let { productId } = useParams();
  const {
    sendRequest,
    status,
    data: productInfo,
    error,
  } = useHttp(getProductDetails, true);

  useEffect(() => {
    sendRequest(productId);
  }, [sendRequest, productId]);

  if (status === "pending") {
    return <Loader />;
  }
  return (
    <>
      <BreadCrumb productInfo={productInfo} />
      <ProductInfo productInfo={productInfo} />
      <div className="details section">
        <div className="details__center center">
          <div className="details__row">
            <div className="details__col">
              <div className="details__stage stage">- Product Features</div>
              <h1 className="details__title title">Explore the Features</h1>
            </div>
            <div className="details__col">
              <div className="details__item">
                <div className="details__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                  >
                    <path
                      d="M15.993 2l7.783 8.203c1.54 1.62 2.587 3.687 3.012 5.937a12.18 12.18 0 0 1-.625 6.7c-.832 2.12-2.242 3.93-4.05 5.205S18.176 30 16 30s-4.303-.68-6.112-1.955-3.22-3.086-4.05-5.205a12.18 12.18 0 0 1-.625-6.7c.425-2.25 1.473-4.315 3.012-5.937L15.993 2z"
                      stroke="#000"
                      stroke-width="2.5"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="details__box">
                  <div className="details__category">Natural</div>
                  <div className="details__text">
                    We are using natural ingredients only when creating our
                    products.
                  </div>
                </div>
              </div>
              <div className="details__item">
                <div className="details__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                  >
                    <path
                      d="M16 30s11-5.6 11-14V6.2L16 2 5 6.2V16c0 8.4 11 14 11 14z"
                      stroke="#000"
                      stroke-width="2.5"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="details__box">
                  <div className="details__category">Full Protection</div>
                  <div className="details__text">
                    This product provides broad spectrum SPF 50 and blue light
                    protection.
                  </div>
                </div>
              </div>
              <div className="details__item">
                <div className="details__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    stroke="#000"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M30 9L17.91 20.875l-6.364-6.25L2 24"></path>
                    <path d="M22 9h8v8"></path>
                  </svg>
                </div>
                <div className="details__box">
                  <div className="details__category">Trending</div>
                  <div className="details__text">
                    It is one of our most popular products that we have on
                    offer.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReletedProduct productInfo={productInfo} />
    </>
  );
};

export default ProductDetail;

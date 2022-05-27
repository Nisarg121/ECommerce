import React, { useEffect } from "react";
import { getAllProducts } from "../../apis/Product";
import useHttp from "../../hooks/use-http";
import ProductItem from "./ProductItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const ProductList = () => {
  const {
    sendRequest,
    status,
    data: productList,
    error,
  } = useHttp(getAllProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (error) {
    return toast.error(error);
  }

  return (
    <div className="products products_main section">
      <div className="products__center center">
        <div className="products__stage stage">- Our Products </div>
        <h2 className="products__title title title_mb-lg">
          Explore out Products
        </h2>
        {status === "pending" && (
          <div className="products__list">
            <div className="product">
              <div className="product__view">
                <Skeleton className="product__preview" borderRadius={48} />
              </div>
              <a className="product__name">
                <Skeleton height={20} />
              </a>
              <div className="product__details">
                <div className="product__category">
                  <Skeleton height={20} width={107} />
                </div>
                <div className="product__price">
                  <span className="product__actual">
                    <Skeleton height={20} width={107} />
                  </span>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product__view">
                <Skeleton className="product__preview" borderRadius={48} />
              </div>
              <a className="product__name">
                <Skeleton height={20} />
              </a>
              <div className="product__details">
                <div className="product__category">
                  <Skeleton height={20} width={107} />
                </div>
                <div className="product__price">
                  <span className="product__actual">
                    <Skeleton height={20} width={107} />
                  </span>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product__view">
                <Skeleton className="product__preview" borderRadius={48} />
              </div>
              <a className="product__name">
                <Skeleton height={20} />
              </a>
              <div className="product__details">
                <div className="product__category">
                  <Skeleton height={20} width={107} />
                </div>
                <div className="product__price">
                  <span className="product__actual">
                    <Skeleton height={20} width={107} />
                  </span>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product__view">
                <Skeleton className="product__preview" borderRadius={48} />
              </div>
              <a className="product__name">
                <Skeleton height={20} />
              </a>
              <div className="product__details">
                <div className="product__category">
                  <Skeleton height={20} width={107} />
                </div>
                <div className="product__price">
                  <span className="product__actual">
                    <Skeleton height={20} width={107} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {status === "completed" && (
          <>
            <div className="products__list">
              {productList.map((product) => (
                <ProductItem
                  key={product._id}
                  id={product._id}
                  image={product.productImage}
                  name={product.name}
                  price={product.price}
                  category={product.categoryId}
                />
              ))}
            </div>
            <div className="products__btns">
              <Link className="products__btn btn btn_green" to="/category">
                View All
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;

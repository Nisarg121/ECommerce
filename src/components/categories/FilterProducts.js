import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getfilteredProducts } from "../../apis/Category";
import useHttp from "../../hooks/use-http";
import ProductItem from "../product/ProductItem";
import LoadMore from "./LoadMore";

const FilterProducts = (props) => {
  const [productList, setProductList] = useState([]);
  const [isLoadMore, setIsLoadMore] = useState(true);

  const { sendRequest, status, data, error } = useHttp(
    getfilteredProducts,
    true
  );

  useEffect(() => {
    if (status === "completed" && !error) {
      setProductList(data);
    }
    if (error) {
      return toast.error(error);
    }
  }, [sendRequest, status, error, data]);

  useEffect(() => {
    setIsLoadMore(true);
    sendRequest(props.filterBody);
  }, [sendRequest, props]);

  if (status === "pending") {
    return (
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
    );
  }

  return (
    <>
      <div className="products__list">
        {productList.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            image={product.productImage}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
      {productList.length >= 8 && isLoadMore && (
        <LoadMore
          setProductList={setProductList}
          setIsLoadMore={setIsLoadMore}
          filterBody={props.filterBody}
        />
      )}
    </>
  );
};

export default FilterProducts;

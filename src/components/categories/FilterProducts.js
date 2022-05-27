import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import { getfilteredProducts } from "../../apis/Category";
import useHttp from "../../hooks/use-http";
import ProductItem from "../product/ProductItem";

const FilterProducts = (props) => {
  const {
    sendRequest,
    status,
    data: productList,
    error,
  } = useHttp(getfilteredProducts, true);

  useEffect(() => {
    sendRequest(props.filterBody);
  }, [sendRequest, props.filterBody]);

  if (status === "pending") {
    return <div className="products__list">
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
  </div>;
  }

  if (error) {
    return toast.error(error);
  }

  return (
    <div className="products__list">
      {productList.map((product) => (
        <ProductItem
          key={product._id}
          id={product._id}
          image={product.productImage}
          name={product.name}
          price={product.price}
          category={product.category._id}
        />
      ))}
    </div>
  );
};

export default FilterProducts;

import React, { useEffect } from "react";
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
    return <div className="loader centered"></div>;
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

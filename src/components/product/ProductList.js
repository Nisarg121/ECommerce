import React, { useEffect } from "react";
import { getAllProducts } from "../../apis/Product";
import useHttp from "../../hooks/use-http";
import ProductItem from "./ProductItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  if (status === "pending") {
    return (
      <div className="products products_main section">
        <div className="products__center center">
          <div className="products__stage stage">- Our Products </div>
          <h2 className="products__title title title_mb-lg">
            Explore out Products
          </h2>
          <div class="loader centered"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return toast.error(error);
  }
  console.table(productList);
  return (
    <div className="products products_main section">
      <div className="products__center center">
        <div className="products__stage stage">- Our Products </div>
        <h2 className="products__title title title_mb-lg">
          Explore out Products
        </h2>
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
          <a className="products__btn btn btn_green" href="category.html">
            View All
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

import React, { useEffect } from "react";
import { getAllCategries } from "../../apis/Category";
import useHttp from "../../hooks/use-http";
import CategoryItem from "./CategoryItem";

const CategorieList = () => {
  const {
    sendRequest,
    status,
    data: categoriesList,
    error,
  } = useHttp(getAllCategries, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <>
        <div className="categories section">
          <div className="categories__center center">
            <div className="categories__stage stage">- The Categories</div>
            <h2 className="categories__title title title_mb-lg">
              Browse by Category
            </h2>
            <div class="loader centered"></div>
          </div>
        </div>
      </>
    );
  }

  console.log(status);
  console.log(categoriesList);
  
  const categoryList = categoriesList.map((category) => (
    <CategoryItem
      key={category._id}
      id={category._id}
      name={category.name}
      img={category.categoryIconImage}
    />
  ));

  return (
    <div className="categories section">
      <div className="categories__center center">
        <div className="categories__stage stage">- The Categories</div>
        <h2 className="categories__title title title_mb-lg">
          Browse by Category
        </h2>
        <div className="categories__container">
          <div className="categories__slider js-slider-categories">
            {categoryList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorieList;

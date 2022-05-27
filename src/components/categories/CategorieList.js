import React from "react";
import CategoryItem from "./CategoryItem";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { NextButton, PrevButton } from "../customerReviews/Button";
import Skeleton from "react-loading-skeleton";

const CategorieList = () => {
  const categoriesList = useSelector((state) => state.categories.categoryList);

  const setting = {
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    speed: 600,
    infinite: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  if (categoriesList.length === 0) {
    return (
      <div className="categories section">
        <div className="categories__center center">
          <div className="categories__stage stage">- The Categories</div>
          <h2 className="categories__title title title_mb-lg">
            Browse by Category
          </h2>
          <div className="categories__container">
            <div style={{ display: "flex" }}>
              <Skeleton
                height={145}
                width={145}
                style={{ margin: "1rem" }}
                borderRadius={24}
              />
              <Skeleton
                height={145}
                width={145}
                style={{ margin: "1rem" }}
                borderRadius={24}
              />
              <Skeleton
                height={145}
                width={145}
                style={{ margin: "1rem" }}
                borderRadius={24}
              />
              <Skeleton
                height={145}
                width={145}
                style={{ margin: "1rem" }}
                borderRadius={24}
              />
              <Skeleton
                height={145}
                width={145}
                style={{ margin: "1rem" }}
                borderRadius={24}
              />
              <Skeleton
                height={145}
                width={145}
                style={{ margin: "1rem" }}
                borderRadius={24}
              />
              <Skeleton
                height={145}
                width={145}
                style={{ margin: "1rem" }}
                borderRadius={24}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="categories section">
      <div className="categories__center center">
        <div className="categories__stage stage">- The Categories</div>
        <h2 className="categories__title title title_mb-lg">
          Browse by Category
        </h2>
        <div className="categories__container">
          {categoriesList.length === 0 && (
            <div style={{ display: "flex" }}>
              <Skeleton
                height={145}
                width={145}
                style={{ margin: "1rem" }}
                borderRadius={24}
              />
              <Skeleton
                height={145}
                width={145}
                style={{ margin: "1rem" }}
                borderRadius={24}
              />
              <Skeleton
                height={145}
                width={145}
                style={{ margin: "1rem" }}
                borderRadius={24}
              />
              <Skeleton
                height={145}
                width={145}
                style={{ margin: "1rem" }}
                borderRadius={24}
              />
              <Skeleton
                height={145}
                width={145}
                style={{ margin: "1rem" }}
                borderRadius={24}
              />
              <Skeleton
                height={145}
                width={145}
                style={{ margin: "1rem" }}
                borderRadius={24}
              />
              <Skeleton
                height={145}
                width={145}
                style={{ margin: "1rem" }}
                borderRadius={24}
              />
            </div>
          )}
          {categoriesList.length > 0 && (
            <Slider
              {...setting}
              className="categories__slider js-slider-categories"
            >
              {categoriesList.map((category) => (
                <CategoryItem
                  key={category._id}
                  id={category._id}
                  name={category.name}
                  img={category.categoryIconImage}
                />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategorieList;

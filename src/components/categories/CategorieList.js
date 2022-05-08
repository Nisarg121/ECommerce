import React, { useEffect } from "react";
import { getAllCategries } from "../../apis/Category";
import useHttp from "../../hooks/use-http";
import CategoryItem from "./CategoryItem";
import Slider from "react-slick";
import { toast } from "react-toastify";
import { categoryActions } from "../../store/Category";
import { useDispatch } from "react-redux";

const CategorieList = () => {
  const dispatch = useDispatch();

  const {
    sendRequest,
    status,
    data: categoriesList,
    error,
  } = useHttp(getAllCategries, true);

  const setting = {
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
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

  useEffect(() => {
    if (status === "completed") {
      dispatch(categoryActions.addCategories(categoriesList));
    }
  }, [status]);

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

  if (error) {
    return toast.error(error);
  }

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
          <div>
            <Slider {...setting}>{categoryList}</Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorieList;

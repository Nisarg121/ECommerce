import React, { useState } from "react";
import { useSelector } from "react-redux";

const Filter = (props) => {
  const { categoryList } = useSelector((state) => state.categories);
  const [showDrop, setShowDrop] = useState([false, false, false]);

  const colors = ["Red", "Blue", "Green", "Black"];
  const categories = categoryList.map((category) => {
    return {
      categoryId: category._id,
      categoryName: category.name,
    };
  });

  const colorFilterHandler = (color) => {
    props.setColorFilter((prevState) => {
      if (props.colorFilter.includes(color)) {
        return prevState.filter((item) => item !== color);
      }
      return [...prevState, color];
    });
  };

  const categoryFilterHandler = (categoryInfo) => {
    props.setcategoryFilter((prevState) => {
      const foundCategory = props.categoryFilter.find(
        (category) => category.categoryId === categoryInfo.categoryId
      );
      if (foundCategory) {
        return prevState.filter(
          (category) => category.categoryId !== categoryInfo.categoryId
        );
      }

      return [...prevState, categoryInfo];
    });
  };

  const priceFilterHandler = (Price) => {
    props.setPriceFilter((prevState) => {
      if (props.priceFilter.includes(Price)) {
        return prevState.filter((item) => item !== Price);
      }
      return [...prevState, Price];
    });
  };

  return (
    <>
      <div
        className={`filters__drop drop js-drop ${showDrop[0] ? "open" : ""}`}
      >
        <div
          className="drop__head js-drop-head"
          onClick={() => setShowDrop([!showDrop[0], false, false])}
        >
          Color
        </div>
        <div className="drop__body js-drop-body">
          {colors.map((color) => (
            <li
              className={`drop__link js-drop-link ${
                props.colorFilter.includes(color) ? "active" : ""
              }`}
              key={color}
              onClick={() => colorFilterHandler(color)}
            >
              {color}
            </li>
          ))}
        </div>
      </div>
      <div
        className={`filters__drop drop js-drop ${showDrop[1] ? "open" : ""}`}
      >
        <div
          className="drop__head js-drop-head"
          onClick={() => setShowDrop([false, !showDrop[1], false])}
        >
          Category
        </div>
        <div className="drop__body js-drop-body">
          {categories.map((category) => (
            <li
              className={`drop__link js-drop-link ${
                props.categoryFilter.find(
                  (item) => item.categoryId === category.categoryId
                )
                  ? "active"
                  : ""
              }`}
              key={category.categoryId}
              onClick={() => categoryFilterHandler(category)}
            >
              {category.categoryName}
            </li>
          ))}
        </div>
      </div>
      <div
        className={`filters__drop drop js-drop ${showDrop[2] ? "open" : ""}`}
      >
        <div
          className="drop__head js-drop-head"
          onClick={() => setShowDrop([false, false, !showDrop[2]])}
        >
          Price Range
        </div>
        <div className="drop__body js-drop-body">
          <li
            className={`drop__link js-drop-link ${
              props.priceFilter === "asce" ? "active" : ""
            }`}
            onClick={() =>
              props.setPriceFilter(props.priceFilter === "asce" ? null : "asce")
            }
          >
            low to high
          </li>
          <li
            className={`drop__link js-drop-link ${
              props.priceFilter === "desc" ? "active" : ""
            }`}
            onClick={() =>
              props.setPriceFilter(props.priceFilter === "desc" ? null : "desc")
            }
          >
            high to low
          </li>
        </div>
      </div>
    </>
  );
};

export default Filter;

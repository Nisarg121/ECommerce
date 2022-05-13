import React, { useState } from "react";

const Filter = (props) => {
  const [showDrop, setShowDrop] = useState([false, false, false]);
  const colors = ["Red", "Blue", "Green", "Black"];
  const Categories = ["Treatments", "Moisturizers", "Featured"];
  const prices = ["$0 - $10", "$10 - $50", "$50 +"];

  const colorFilterHandler = (color) => {
    props.setColorFilter((prevState) => {
      if (props.colorFilter.includes(color)) {
        return prevState.filter((item) => item !== color);
      }
      return [...prevState, color];
    });
  };

  const categoryFilterHandler = (Category) => {
    props.setcategoryFilter((prevState) => {
      if (props.categoryFilter.includes(Category)) {
        return prevState.filter((item) => item !== Category);
      }
      return [...prevState, Category];
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
          {Categories.map((Category) => (
            <li
              className={`drop__link js-drop-link ${
                props.categoryFilter.includes(Category) ? "active" : ""
              }`}
              key={Category}
              onClick={() => categoryFilterHandler(Category)}
            >
              {Category}
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
          {prices.map((Price) => (
            <li
              className={`drop__link js-drop-link ${
                props.priceFilter.includes(Price) ? "active" : ""
              }`}
              key={Price}
              onClick={() => priceFilterHandler(Price)}
            >
              {Price}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filter;

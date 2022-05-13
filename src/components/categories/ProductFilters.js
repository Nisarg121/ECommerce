import React, { useState } from "react";
import Filter from "./Filter";

const ProductFilters = () => {
  const [colorFilter, setColorFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);

  const removeColorFilter = (color) => {
    setColorFilter((prevState) => {
      return prevState.filter((item) => item !== color);
    });
  };

  const removeCategoryFilter = (category) => {
    setCategoryFilter((prevState) => {
      return prevState.filter((item) => item !== category);
    });
  };

  const removePriceFilter = (price) => {
    setPriceFilter((prevState) => {
      return prevState.filter((item) => item !== price);
    });
  };

  return (
    <div className="filters js-filters">
      <div className="filters__sorting">
        <div className="filters__open js-filters-open">Filter By</div>
        <div className="filters__wrap js-filters-wrap">
          <Filter
            colorFilter={colorFilter}
            categoryFilter={categoryFilter}
            priceFilter={priceFilter}
            setColorFilter={setColorFilter}
            setcategoryFilter={setCategoryFilter}
            setPriceFilter={setPriceFilter}
          />
        </div>
      </div>
      <div className="filters__tags">
        {colorFilter.length === 0 ? (
          ""
        ) : (
          <>
            {colorFilter.map((color) => (
              <div
                key={color}
                className="filters__tag"
                onClick={() => removeColorFilter(color)}
              >
                {color}
                <button className="filters__remove"></button>
              </div>
            ))}
          </>
        )}
        {categoryFilter.length === 0 ? (
          ""
        ) : (
          <>
            {categoryFilter.map((category) => (
              <div
                key={category}
                className="filters__tag"
                onClick={() => removeCategoryFilter(category)}
              >
                {category}
                <button className="filters__remove"></button>
              </div>
            ))}
          </>
        )}
        {priceFilter.length === 0 ? (
          ""
        ) : (
          <>
            {priceFilter.map((price) => (
              <div
                key={price}
                className="filters__tag"
                onClick={() => removePriceFilter(price)}
              >
                {price}
                <button className="filters__remove"></button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductFilters;

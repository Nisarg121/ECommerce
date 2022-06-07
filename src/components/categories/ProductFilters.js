import React, { useState } from "react";
import Filter from "./Filter";
import FilterProducts from "./FilterProducts";

const ProductFilters = (props) => {
  const [colorFilter, setColorFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState([]);

  const filterBody = {
    color: colorFilter,
    categoryIds: categoryFilter.map((category) => category.categoryId),
    price: priceFilter,
  };

  const removeColorFilter = (color) => {
    setColorFilter((prevState) => {
      return prevState.filter((item) => item !== color);
    });
  };

  const removeCategoryFilter = (categoryId) => {
    setCategoryFilter((prevState) => {
      return prevState.filter((item) => item.categoryId !== categoryId);
    });
  };

  return (
    <>
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
                  key={category.categoryIid}
                  className="filters__tag"
                  onClick={() => removeCategoryFilter(category.categoryId)}
                >
                  {category.categoryName}
                  <button className="filters__remove"></button>
                </div>
              ))}
            </>
          )}
          {priceFilter && (
            <>
              {
                <div
                  className="filters__tag"
                  onClick={() => setPriceFilter(null)}
                >
                  {priceFilter === "asce" && "low to high"}
                  {priceFilter === "desc" && "high to low"}
                  <button className="filters__remove"></button>
                </div>
              }
            </>
          )}
        </div>
      </div>
      <FilterProducts filterBody={filterBody} />
    </>
  );
};

export default ProductFilters;

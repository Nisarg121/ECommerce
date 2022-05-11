import React, { useState } from "react";
import Filter from "./Filter";

const ProductFilters = () => {
  const [filters, setFilters] = useState([]);

  const removeFilterHandler = (removeItem) => {
    setFilters((prevState) => {
      prevState = prevState.filter((item) => item !== removeItem);
      return prevState;
    });
  };

  return (
    <div className="filters js-filters">
      <div className="filters__sorting">
        <div className="filters__open js-filters-open">Filter By</div>
        <div className="filters__wrap js-filters-wrap">
          <Filter
            key="color"
            filterTitle={"color"}
            filterItems={["Red", "Blue", "Green", "Black"]}
            setFilters={setFilters}
            filters={filters}
          />
          <Filter
            key="Category"
            filterTitle={"Category"}
            filterItems={["Treatments", "Moisturizers", "Featured"]}
            setFilters={setFilters}
            filters={filters}
          />
          <Filter
            key="Sort By"
            filterTitle={"Sort By"}
            filterItems={["Low to High", "High to Low"]}
            setFilters={setFilters}
            filters={filters}
          />
        </div>
      </div>
      {filters.length === 0 ? (
        ""
      ) : (
        <div className="filters__tags">
          {filters.map((filterItem) => (
            <div
              className="filters__tag"
              key={filterItem}
              onClick={() => removeFilterHandler(filterItem)}
            >
              {filterItem}
              <button className="filters__remove" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductFilters;

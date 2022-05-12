import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";

const Filter = (props) => {
  const [allFilters, setAllFilters] = useState([]);

  const filterHandler = (items) => {
    setAllFilters((prevState) => {
      return [...prevState, items];
    });
  };
  return (
    <>
      <ColorFilter onFilter={filterHandler} />
      <CategoryFilter onFilter={filterHandler} />
      <PriceFilter onFilter={filterHandler} />
    </>
  );
};

export default Filter;

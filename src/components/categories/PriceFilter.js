import React, { useState } from "react";

const PriceFilter = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [priceFilter, setPriceFilter] = useState([]);
  const prices = ["$0 - $10", "$10 - $50", "$50 +"];

  const filterHandler = (price) => {
    setPriceFilter((prevState) => {
      if (priceFilter.includes(price)) {
        return prevState.filter((item) => item !== price);
      }
      return [...prevState, price];
    });
  };

  return (
    <div className={`filters__drop drop js-drop ${showDrop ? "open" : ""}`}>
      <div
        className="drop__head js-drop-head"
        onClick={() => setShowDrop(!showDrop)}
      >
        Price Range
      </div>
      <div className="drop__body js-drop-body">
        {prices.map((price) => (
          <li
            className={`drop__link js-drop-link`}
            key={price}
            onClick={() => filterHandler(price)}
          >
            {price}
          </li>
        ))}
      </div>
    </div>
  );
};

export default PriceFilter;

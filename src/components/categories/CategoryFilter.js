import React, { useState } from "react";

const CategoryFilter = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState([]);

  const Categories = ["Treatments", "Moisturizers", "Featured"];

  const filterHandler = (category) => {
    setCategoryFilter((prevState) => {
      if (categoryFilter.includes(category)) {
        return prevState.filter((item) => item !== category);
      }
      return [...prevState, category];
    });
  };

  return (
    <div className={`filters__drop drop js-drop ${showDrop ? "open" : ""}`}>
      <div
        className="drop__head js-drop-head"
        onClick={() => setShowDrop(!showDrop)}
      >
        Category
      </div>
      <div className="drop__body js-drop-body">
        {Categories.map((category) => (
          <li
            className={`drop__link js-drop-link`}
            key={category}
            onClick={() => filterHandler(category)}
          >
            {category}
          </li>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;

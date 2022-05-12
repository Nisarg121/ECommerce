import React, { useState } from "react";

const ColorFilter = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [colorFilter, setColorFilter] = useState([]);

  const colors = ["Red", "Blue", "Green", "Black"];

  const filterHandler = (color) => {
    setColorFilter((prevState) => {
      if (colorFilter.includes(color)) {
        return prevState.filter((item) => item !== color);
      }
      return [...prevState, color];
    });
  };

  return (
    <div className={`filters__drop drop js-drop ${showDrop ? "open" : ""}`}>
      <div
        className="drop__head js-drop-head"
        onClick={() => setShowDrop(!showDrop)}
      >
        Color
      </div>
      <div className="drop__body js-drop-body">
        {colors.map((color) => (
          <li
            className={`drop__link js-drop-link`}
            key={color}
            onClick={() => filterHandler(color)}
          >
            {color}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;

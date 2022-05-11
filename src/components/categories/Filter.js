import React, { useState } from "react";
import ListItem from "./ListItem";

const Filter = (props) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div className={`filters__drop drop js-drop ${showDrop ? "open" : ""}`}>
      <div
        className="drop__head js-drop-head"
        onClick={() => {
          setShowDrop(!showDrop);
        }}
      >
        {props.filterTitle}
      </div>
      <div className="drop__body js-drop-body">
        {props.filterItems.map((item) => (
          <ListItem
            key={item}
            dropItem={item}
            setFilters={props.setFilters}
            filters={props.filters}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;

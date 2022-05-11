import React from "react";

const ListItem = (props) => {
  const filterWithActiveHanlder = () => {
    props.setFilters((prevState) => {
      if (prevState.includes(props.dropItem)) {
        prevState = prevState.filter((item) => item !== props.dropItem);
        return prevState;
      } else {
        return [...prevState, props.dropItem];
      }
    });
  };

  return (
    <li
      className={`drop__link js-drop-link ${
        props.filters.includes(props.dropItem) ? "active" : ""
      }`}
      onClick={filterWithActiveHanlder}
      key={props.dropItem}
    >
      {props.dropItem}
    </li>
  );
};

export default ListItem;

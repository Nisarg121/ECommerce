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
    <>
      {props.filterItems.map((item) => (
        <li
          className={`drop__link js-drop-link`}
          onClick={filterWithActiveHanlder}
          key={item}
        >
          {item}
        </li>
      ))}
    </>
  );
};

export default ListItem;

import classNames from "classnames";
import React from "react";

import classes from "./SorthBlock.module.css";

const SortBlock = React.memo(function SortBlock({
  sortTypes,
  onSelectPopUpItem,
  selectedSort,
}) {


  return (
    <div className={classes.wrapper}>
      {sortTypes.map((obj, index) => (
        <div
          className={classNames(classes.item, {
            [classes.itemActive]: selectedSort.name === obj.name,
          })}
          onClick={() => onSelectPopUpItem(obj)}
          key={`${obj.type}_${index}`}
        >
          {obj.name}
        </div>
      ))}
    </div>
  );
});

export default SortBlock;

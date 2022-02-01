import React from "react";
import PropTypes from "prop-types";
import classes from "./SelectPizza.module.css";
import classNames from "classnames";

const typesNames = ["тонкое", "традиционное"];
const sizesNum = [26, 30, 40];

const SelectPizza = ({ name, imageUrl, price, sizes, types, items }) => {
  const [activeTypes, setActiveTypes] = React.useState(types[0]);
  const onSelectTypesClick = (index) => {
    setActiveTypes(index);
  };

  const [activeSize, setActiveSize] = React.useState();
  const onSelectSizesClick = (index) => {
    setActiveSize(index);
  };

  return (
    <div 
      className = {classes.wrapper}
    >
      <div className={classes.imgBlock}>
        <img src={imageUrl} alt="pizza" className={classes.imgPizza} />
      </div>
      <div className={classes.nameBLock}>{name}</div>
      <div className={classes.PizzaSettings}>
        <div className={classes.SelectTesto}>
          {typesNames.map((type, index) => (
            <div
              key={`${type}_${index}`}
              className={classNames(classes.testo, {
                [classes.active]: activeTypes === index,
                [classes.disabled]: !types.includes(index),
              })}
              onClick={() => onSelectTypesClick(index)}
            >
              {type}
            </div>
          ))}
        </div>
        <div className={classes.size}>
          {sizesNum.map((num, index) => (
            <div
              key={`${num}_${index}`}
              className={classNames(classes.cm, {
                [classes.active]: activeSize === index,
                [classes.disabled]: !sizes.includes(num),
              })}
              onClick={() => onSelectSizesClick(index)}
            >
              {`${num} cm.`}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.priceAndAddPizza}>
        <div className={classes.price}>от {price}₽</div>
        <div className={classes.addSecondPizza}>
          <div className={classes.text}>+ Добавить</div>
          <div className={classes.second}>2</div>
        </div>
      </div>
    </div>
  );
};

SelectPizza.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,

  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default SelectPizza;

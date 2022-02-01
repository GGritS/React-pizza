//---------LIBRARIES-------
import React from "react";
//-------------------------

//--------HOOKS-----------
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//-------------------------

//---------ACTIONS---------
import { setPizzas, fetchPizzas } from "./../../redux/actions/pizzas";
//-------------------------

// -------COMPONENTS-------
import SelectPizza from "./SelectPizza/SelectPizza";
//-------------------------

//--------STYLES-----------
import classes from "./MainBlock.module.css";
import SelectPizzaLoader from "./SelectPizza/SelectPizzaLoader";
import classNames from "classnames";
//-------------------------

const MainBlock = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const { isLoaded } = useSelector(({ pizzas }) => ({
    isLoaded: pizzas.isLoaded,
  }));

  const { items } = useSelector(({ pizzas }) => ({
    items: pizzas.items,
  }));

  const { category, selectedSort } = useSelector(({ filters }) => ({
    category: filters.category,
    selectedSort: filters.selectedSort,
  }))


  React.useEffect(() => {
      dispatch(fetchPizzas(category, selectedSort));
  }, [category, selectedSort]);
 
  React.useEffect(() => {
    history.push("/mainPage");
  }, []);
 
  return (
    <div className={classes.wrapper}>
      <div className={classes.mainFlexWrapper}>
        <div className={classes.sortText}>Все пиццы</div>
        <div 
          className = {classes.pizzaWrapperBetween}
        >
          {isLoaded
            ? items.map((item) => <SelectPizza key={item.id} {...item} items = {items}/>)
            : Array(10).fill(0).map((inc, index) => <SelectPizzaLoader key = {index}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default MainBlock;

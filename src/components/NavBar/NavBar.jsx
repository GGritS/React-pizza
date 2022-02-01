//---------LIBRARIES-------
import React from "react";
import classNames from "classnames";
//-------------------------

//--------HOOKS------------
import { useDispatch, useSelector } from "react-redux";
//-------------------------

//---------ACTIONS---------
import {
  setCategory,
  setSortBy,
  setActiveSort,
} from "./../../redux/actions/filters";
//-------------------------

// -------COMPONENTS-------
import SortBlock from "./SorthBlock/SorthBlock";
//-------------------------

//--------STYLES-----------
import classes from "./NavBar.module.css";
import useDismissOverflow from "../../hooks/useDissmissOverflow";
//-------------------------

const NavBar = React.memo(function NavBar() {
  const sortBlockRef = React.useRef();
  const dispatch = useDispatch();
  const { category,navBarCategories , sortTypes, selectedSort } = useSelector(
    ({ filters }) => filters
  );

  //Category
  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };
  //---------

  //-----popUp----Open/Closed---
  const [isVisiblePopup, isSetVisiblePopup] = React.useState(false);
  const onVisiblePopup = () => {
    isSetVisiblePopup(!isVisiblePopup);
  };
  //----------------------------

  //-----popUp----
  const onSelectPopUpItem = (obj) => {
    //отображение активного слова (Сортировка по - "Слово")
    dispatch(setActiveSort(obj));
    //закрытие popUp`a после выбора слова
    isSetVisiblePopup(false);
  };

  //-----popUp----Проверка клика (клик снаружи popUp`a?)
  const handleOutsideClick = (e) => {
    // if (!e.path.includes(sortBlockRef.current)) { //OLD version dissmiss
    isSetVisiblePopup(false);
    // }
  };
  useDismissOverflow(handleOutsideClick, sortBlockRef, isVisiblePopup);
  //-----popUp----вызов функции (handleOutsideClick)
  // React.useEffect(() => {
  //   document.body.addEventListener("click", handleOutsideClick);
  //   //если ты вешаешь слушатель событий на элемент, а тем более на ДОКУМЕНТ!!! его нужно удолять
  //   // это можно сделать вернув калбек с эффекта, он вызовется когда зависимости эффекта изменятся
  //   // в этом слечае когда компонент будет удаляться
  //   // раскоментируй некст строку
  //   // return ()=> document.body.removeEventListener("click", handleOutsideClick)
  //   return ()=> document.body.removeEventListener("click", handleOutsideClick)

  // }, []);
  //--------------------------------------------------

  return (
    <div className={classes.wrapper}>
      <div className={classes.flexWrap}>
        <div className={classes.flexFiltersBlock}>
          <div
            className={classNames({
              [classes.active]: category === null,
              [classes.notActive]: category != null,
            })}
            onClick={() => onSelectCategory(null)}
          >
            Все
          </div>
          {navBarCategories &&
            navBarCategories.map((item, index) => (
              <div
                className={classNames({
                  [classes.active]: category === index,
                  [classes.notActive]: category != index,
                })}
                key={`${item}_${index}`}
                onClick={() => onSelectCategory(index)}
              >
                {item}
              </div>
            ))}
        </div>

        <div>
          <div className={classes.flexSorthBlock} onClick={onVisiblePopup}>
            <div
              className={
                isVisiblePopup
                  ? `${classes.arrow} ${classes.sortItem} ${classes.rotated}`
                  : `${classes.arrow} ${classes.sortItem}`
              }
            >
              ^
            </div>
            <div className={`${classes.sortItem}`}>Сортировка по: </div>
            <div className={`${classes.sortItem} ${classes.selectSort}`}>
              <div className={classes.text11}>{selectedSort.name}</div>
            </div>
          </div>

          <div className={classes.sortBlockContainer} ref={sortBlockRef}>
            {isVisiblePopup && (
              <SortBlock
                onSelectPopUpItem={onSelectPopUpItem}
                sortTypes={sortTypes}
                selectedSort={selectedSort}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default NavBar;

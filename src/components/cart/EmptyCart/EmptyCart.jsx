import React from "react";

import h from "./EmptyCart.module.css";
import emptyCart from "./../../../images/empty-cart.png";
import { NavLink } from "react-router-dom";

const EmptyCart = (props) => {
  return (
    <div className={h.wrapper}>
      <div className={h.flexWrap}>
        <div className={h.bigText}>Корзина пустая 😕</div>
        <div className={h.text}>
          Вероятней всего, вы не заказывали ещё пиццу.
        </div>
        <div className={h.text}>
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </div>
        <div className={h.imgCartBlock}>
          <img src={emptyCart} alt="empty cart" className={h.imgCart} />
        </div>
        <div className={h.buttonBlock}>
          <NavLink to="mainPage" className={h.button}>
            Вернуться назад
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;

import React from 'react';

import h from './CartFooter.module.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { NavLink } from 'react-router-dom';

const CartFooter = (props) => {
  return (
    <div className = {h.cartFooter}>
    <div className = {h.footerTetx}>
      <div className = {h.totalPizzasText}>
        Всего пицц: 
        <div className = {h.totalPizzasNum}>
          100 шт.
        </div>
      </div>
      <div className = {h.OrderPriceText}>
        Сумма заказа:
        <div className = {h.OrderPriceSum}>
          10 000 ₽
        </div>
      </div>
    </div>
    <div className = {h.footerButtons}>
    <NavLink to = 'mainPage'>
      <div className = {h.comeBackButt}><ArrowBackIosIcon />Вернуться назад</div>
    </NavLink>
      <div className = {h.payNowButt}>Оплатить сейчас</div>
    </div>
  </div>
  );
}

export default CartFooter;

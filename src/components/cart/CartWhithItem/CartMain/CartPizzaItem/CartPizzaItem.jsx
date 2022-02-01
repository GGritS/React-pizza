import React from 'react';

import h from './CartPizzaItem.module.css'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import pizzaIMG from './../../../../../images/big-pizza.jpeg'

const CartPizzaItem = (props) => {
  return (
    <div className = {h.contentBlock}>
      <div className = {h.textAndImgBlock}>
        <div className = {h.imgBlock}>
          <img src={pizzaIMG} alt="pizza" className = {h.img}/>
        </div>
        <div className = {h.textBlock}>
          <div className = {h.bigText}>Сырный цыплeнок</div>
          <div className = {h.smallText}>тонкое тесто, 26 см.</div>
        </div>
      </div>
      <div className = {h.amountBlock}>
        <div className = {`${h.minusPlusBlock} ${h.minusBlock}`}>-</div>
        <div className = {h.amount}>2</div>
        <div className = {`${h.minusPlusBlock} ${h.plusBlock}`}>+</div>
      </div>
      <div className = {h.priceBlock}>770 ₽</div>
      <div className = {h.removeItemBlock}><CloseOutlinedIcon /></div>
    </div>
  );
}

export default CartPizzaItem;

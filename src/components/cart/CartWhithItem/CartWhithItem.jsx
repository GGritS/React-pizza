import React from 'react';

import h from './CartWhithItem.module.css'

import CartFooter from './CartFooter/CartFooter';
import CartHeder from './CartHeader/CartHeader';
import CartMain from './CartMain/CartMain';


const CartWhithItem = (props) => {
  return (
    <div className = {h.wrapper}>
      <div className ={h.flexWrap}>
        <CartHeder />
        <CartMain />
        <CartFooter />
      </div>
    </div>
  );
}

export default CartWhithItem;

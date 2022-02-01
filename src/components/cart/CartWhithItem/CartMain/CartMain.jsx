import React from 'react';

import h from './CartMain.module.css'
import CartPizzaItem from './CartPizzaItem/CartPizzaItem';

const CartMain = (props) => {
  return (
    <div className = {h.cartMain}>
      <CartPizzaItem />
      <CartPizzaItem />
    </div>
  );
}

export default CartMain;

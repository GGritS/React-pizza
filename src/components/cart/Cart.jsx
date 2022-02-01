import React from 'react';

import h from './Cart.module.css'
import CartWhithItem from './CartWhithItem/CartWhithItem';
import EmptyCart from './EmptyCart/EmptyCart';

const Cart = (props) => {
  return (
    <div className = {h.wrapper}>
      {/* <EmptyCart /> */}
      <CartWhithItem />
    </div>
  );
}

export default Cart;

import React from "react";

import h from "./CartHeader.module.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const CartHeder = (props) => {
  return (
    <div className={h.cartSecondHeader}>
      <div className={h.cartText}>
        <ShoppingCartOutlinedIcon style={{ fontSize: 32, marginRight: 2 }} />
        Корзина
      </div>
      <div className={h.clearCartText}>
        <DeleteOutlineOutlinedIcon style={{ fontSize: 26, marginRight: 2 }} />
        Очистить корзину
      </div>
    </div>
  );
};

export default CartHeder;

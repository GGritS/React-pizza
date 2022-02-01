import React from "react";

import { NavLink } from "react-router-dom";
import h from "./LinkToCartBlock.module.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const LinkToCartBlock = (props) => {
  return (
    <NavLink to="cartPage">
      <div className={h.cartBlock}>
        <div className={h.sum}>10.000 ₽</div>
        <div className={h.line}></div>
        <div className={h.amount}>
          <ShoppingCartOutlinedIcon style={{ color: "#fff" }} /> 100
        </div>
      </div>
    </NavLink>
  );
};

export default LinkToCartBlock;

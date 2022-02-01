import React from 'react';
import logoIMG from './../../images/pizza-logo.png'
import h from './Header.module.css'
import { NavLink } from 'react-router-dom';
import LinkToCartBlock from './LinkToCartBlock/LinkToCartBlock';

const Header = () => {
  return (
    <div className = {h.headerBlock}>
      <div className = {h.flexWrpap}>
        <div className = {h.logoBlock}>
          <div className = {h.logoImgBlock}>
            <NavLink to = 'mainPage'>
              <img src= {logoIMG} alt="logo" className = {h.logoImg} />
            </NavLink>
          </div>
           <div className = {h.textLogoBlock}> 
            <div className = {h.h1Logo}>
              <h1>React Pizza</h1>
            </div>
            <div className = {h.h2Logo}>
              <h2>Самая вкусная пицца во вселенной</h2>
            </div>
          </div>
        </div>
          <LinkToCartBlock />
      </div>
    </div>
  );
}

export default Header;

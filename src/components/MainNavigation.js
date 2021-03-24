import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';

const mainNavigation = props => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Carts ({props.cartItemNumber})</NavLink>
        </li>
        <li>
          <NavLink to="/removed">Removed Item ({props.removedcartItemNumber})</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default mainNavigation;

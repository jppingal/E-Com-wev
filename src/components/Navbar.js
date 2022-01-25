import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="left">
          <li>
            <Link to="/">IndiaExpress</Link>
          </li>
        </ul>
        <ul className="right">
          <li>
            <Link to="cart">
              <span className="shoppingCart">
                <i className="fas fa-cart-plus"></i>
              </span>
              <span className="cartCount">0</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ElectroMart</Link>
      </div>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart <span className="cart-badge">{cartCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

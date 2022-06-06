import React from "react";
import "./Header.scss";
import Logo from "./../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="e-commerce logo" height="50vh" width="70vw" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" activeClassName="active">
                Search
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" activeClassName="active">
                Your shopping cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/registriation" activeClassName="active">
                Register/Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

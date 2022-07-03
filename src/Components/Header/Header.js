import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./../../assets/logo.png";
import { AuthContext } from "../../firebase/auth";
import "./Header.scss";

export default function Header() {
  const { currentUser, logout } = useContext(AuthContext);

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
              <NavLink to="/" exact="true" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" activeclassname="active">
                Search
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" activeclassname="active">
                Your shopping cart
              </NavLink>
            </li>

            {currentUser && (
              <>
                <li>
                  <NavLink to="/myAccount" activeclassname="active">
                    My Account
                  </NavLink>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      logout();
                    }}
                    to="/"
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}

            {!currentUser && (
              <>
                <li>
                  <NavLink to="/register" activeclassname="active">
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" activeclassname="active">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

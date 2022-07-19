import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./../../assets/logo.png";
import { AuthContext } from "../../Context Api/AuthContext";
import "./Header.scss";
import { CartContext } from "../../Context Api/CartContext";

export default function Header() {
  const { currentUser, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const boxClassName = toggle ? "topnav" : "topnav responsive";

  const cartQuantities = cart.map((object) => {
    return object.quantity;
  });

  const getSum = (total, num) => {
    return total + num;
  };
  const totalQuantity = cartQuantities.reduce(getSum, 0);

  return (
    <header>
      <div className={boxClassName}>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="e-commerce logo" height="50px" width="70px" />
          </Link>
          <a href={void 0} className="icon" onClick={handleClick}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
        <nav>
          <NavLink to="/" exact="true" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/search" activeclassname="active">
            Search
          </NavLink>
          <NavLink to="/cart" activeclassname="active">
            Shopping Cart({totalQuantity})
          </NavLink>

          {currentUser && (
            <>
              <NavLink to="/myAccount" activeclassname="active">
                My Account
              </NavLink>

              <Link
                onClick={() => {
                  logout();
                }}
                to="/"
              >
                Logout
              </Link>
            </>
          )}

          {!currentUser && (
            <>
              <NavLink to="/register" activeclassname="active">
                Register
              </NavLink>

              <NavLink to="/login" activeclassname="active">
                Login
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

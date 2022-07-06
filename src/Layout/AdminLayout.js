import React, { useContext } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import VerticalNav from "../Components/VerticalNav/VerticalNav";
import { AuthContext } from "../firebase/auth";
import { NavLink } from "react-router-dom";

export default function AdminLayout({ children }) {
  const { logout } = useContext(AuthContext);

  return (
    <div className="adminLayout">
      <Header />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={() => logout()}>
                  Sign Out
                </NavLink>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

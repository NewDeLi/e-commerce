import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase/auth";
import checkUserIsAdmn from "../Utils/checkUserAdmin";
import "./AdminToolbar.scss";

export default function AdminToolbar() {
  const { currentUser } = useContext(AuthContext);

  const isAdmin = checkUserIsAdmn(currentUser);
  if (!isAdmin) return null;

  return (
    <div className="adminToolbar">
      <ul>
        <li>
          <NavLink to="admin" className="linkButton">
            My Admin
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

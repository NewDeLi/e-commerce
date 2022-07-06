import React, { useContext } from "react";
import { AuthContext } from "../../Context Api/AuthContext";
import UserProfile from "../UserProfile/UserProfile";
import "./VerticalNav.scss";

const VerticalNav = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const configUserProfile = {
    currentUser,
  };

  return (
    <div className="verticalNav">
      <UserProfile {...configUserProfile} />

      <div className="menu">{children}</div>
    </div>
  );
};

export default VerticalNav;

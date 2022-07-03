import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignInScreen from "../../Components/SignInScreen/SignInScreen";
import ForgotPassword from "../../Components/ForgotPassword/ForgotPassword";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import "./Login.scss";

export default function Login() {
  const [isClicked, setIsClicked] = useState(true);
  const handleClicked = () => {
    setIsClicked(true);
  };
  const [alignment, setAlignment] = useState("create");
  const handleToggelButtons = (Mouseevent, newAlignment) => {
    setAlignment(newAlignment);
  };
  const navigate = useNavigate();

  return (
    <section className="login">
      <div className="wrapper">
        <ToggleButtonGroup
          fullWidth
          color="primary"
          value={alignment}
          exclusive
          onChange={handleToggelButtons}
          className="toggleButtonGroup"
        >
          <ToggleButton value="login" onClick={handleClicked}>
            Login
          </ToggleButton>
          <ToggleButton
            value="forgotPassword"
            onClick={() => setIsClicked(false)}
          >
            Forgot Password?
          </ToggleButton>
        </ToggleButtonGroup>

        {!isClicked ? (
          <ForgotPassword navigate={navigate} />
        ) : (
          <SignInScreen navigate={navigate} />
        )}
      </div>
    </section>
  );
}

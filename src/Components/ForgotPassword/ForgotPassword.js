import React, { useContext, useState } from "react";
import FormInput from "../forms/FormInput/FormInput";
import FormButton from "../forms/FormButton/FormButton";

import { AuthContext } from "../../Context Api/AuthContext";

import { Grid } from "@mui/material";
import "./ForgotPassword.scss";

export default function ForgotPassword({ navigate }) {
  const { forgotPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await forgotPassword(email);
      navigate("/login");
    } catch (error) {
      // console.log(error);
    }
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h2>Forgot Password</h2>
      </label>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        spacing={1}
      >
        <Grid item>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <FormButton type="submit">Reset Password</FormButton>
        </Grid>
      </Grid>
    </form>
  );
}

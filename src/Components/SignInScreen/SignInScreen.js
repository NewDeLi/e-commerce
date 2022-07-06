import React, { useContext, useState, useEffect } from "react";

import GoogleButton from "react-google-button";
import FormInput from "../forms/FormInput/FormInput";
import FormButton from "../forms/FormButton/FormButton";

import { AuthContext } from "../../Context Api/AuthContext";

import { Grid } from "@mui/material";
import "./SignInScreen.scss";

export default function SignInScreen({ navigate }) {
  const { signInWithGoogle, signIn, currentUser } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  useEffect(() => {
    if (currentUser) {
      resetForm();
      navigate("/");
    }
  }, [currentUser]);

  const resetForm = () => {
    setInputs({});
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signIn(email, password);
    navigate("/");
  };

  return (
    <section className="signIn">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <label>
            <h2>Login</h2>
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
                type="text"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <FormButton type="submit">Sign in</FormButton>
            </Grid>
            <Grid item>
              <GoogleButton
                onClick={() => {
                  signInWithGoogle();
                }}
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </section>
  );
}

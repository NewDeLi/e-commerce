import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../forms/FormInput/FormInput";
import FormButton from "../forms/FormButton/FormButton";

import { AuthContext } from "../../firebase/auth";

import { Grid } from "@mui/material";
import "./SignUpScreen.scss";

export default function SignUpScreen() {
  const [inputs, setInputs] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = inputs;

  const [errors, setErrors] = useState([]);

  const { handleRegister, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      const error = ["Password Don't match"];

      setErrors(error);
      console.log(errors);
      // return;
    }

    try {
      await handleRegister(displayName, email, password);
    } catch (error) {
      // console.log(error)
    }
  };

  return (
    <section className="signUp">
      <div className="register">
        {errors.length > 0 && (
          <ul>
            {errors.map((error, index) => {
              return <li id={index}>{error}</li>;
            })}
          </ul>
        )}
        <form onSubmit={handleFormSubmit}>
          <label>
            <h2>Register</h2>
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
                name="displayName"
                value={displayName}
                placeholder="Full Name"
                onChange={handleChange}
              />
            </Grid>
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
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Enter Password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <FormButton type="submit">Sign up</FormButton>
            </Grid>
          </Grid>
        </form>
      </div>
    </section>
  );
}

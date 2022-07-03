import React from "react";
import SignUpScreen from "../../Components/SignUpScreen/SignUpScreen";
import "./Register.scss";

export default function Register() {
  return (
    <section className="register">
      <div className="wrapper">
        <SignUpScreen />
      </div>
    </section>
  );
}

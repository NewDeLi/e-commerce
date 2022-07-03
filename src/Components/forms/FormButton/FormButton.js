import React from "react";
import { Button } from "@mui/material";
import "./FormButton.scss";

const FormButton = ({ children, ...otherProps }) => {
  return (
    <Button
      variant="contained"
      className="submitButton"
      {...otherProps}
      sx={{ fontSize: 16 }}
    >
      {children}
    </Button>
  );
};

export default FormButton;

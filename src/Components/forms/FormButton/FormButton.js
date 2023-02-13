import React from "react";
import { Button, Typography } from "@mui/material";
import "./FormButton.scss";

const FormButton = ({ children, ...otherProps }) => {
  return (
    <Button
      variant="contained"
      className="submitButton"
      {...otherProps}
      sx={{ fontSize: 16 }}
    >
      <Typography>{children}</Typography>
    </Button>
  );
};

export default FormButton;

import React from "react";
import { TextField } from "@mui/material";
import "./FormInput.scss";

export default function FormInput({
  handleChange,
  placeholder,
  ...otherProps
}) {
  return (
    <div className="formRow">
      <TextField
        fullWidth
        variant="outlined"
        label={placeholder}
        className="formInput"
        onChange={handleChange}
        {...otherProps}
      ></TextField>
    </div>
  );
}

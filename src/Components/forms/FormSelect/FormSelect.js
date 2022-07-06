import React from "react";
import { FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import "./FormSelect.scss";

const FormSelect = ({
  options,
  defaultValue,
  handleChange,
  label,
  ...otherProps
}) => {
  if (!Array.isArray(options) || options.length < 1) return null;

  return (
    <div className="formRow">
      <FormControl fullWidth>
        {label && <InputLabel>{label}</InputLabel>}

        <Select
          className="formSelect"
          value={defaultValue}
          onChange={handleChange}
          {...otherProps}
        >
          {options.map((option, index) => {
            const { value, name } = option;

            return (
              <MenuItem key={index} value={value}>
                {name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default FormSelect;

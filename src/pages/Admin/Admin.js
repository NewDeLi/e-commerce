import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import AddNewProduct from "../../Components/AddNewProduct/AddNewProduct";
import ManageProducts from "../../Components/ManageProducts/ManageProducts";
import "./Admin.scss";

export default function Admin() {
  const [isClicked, setIsClicked] = useState(true);
  const handleClicked = () => {
    setIsClicked(true);
  };
  const [alignment, setAlignment] = useState("create");
  const handleToggelButtons = (Mouseevent, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="admin">
      <ToggleButtonGroup
        fullWidth
        color="primary"
        value={alignment}
        exclusive
        onChange={handleToggelButtons}
        className="toggleButtonGroup"
      >
        <ToggleButton value="addNewProduct" onClick={handleClicked}>
          Add new Product
        </ToggleButton>
        <ToggleButton
          value="manageProducts"
          onClick={() => setIsClicked(false)}
        >
          Manage Products
        </ToggleButton>
      </ToggleButtonGroup>

      {isClicked ? <AddNewProduct /> : <ManageProducts />}
    </div>
  );
}

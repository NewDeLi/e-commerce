import React from "react";
import "./Footer.scss";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <div className="item">
        <Typography>© Online Shop</Typography>
      </div>

      <div className="item">
        <Typography>NewDeLi</Typography>
      </div>
    </footer>
  );
}

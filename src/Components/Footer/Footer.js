import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="item">
        <span className="material-symbols-outlined">copyright</span>
        <span>e-commerce</span>
      </div>
      <div className="item">
        <span className="material-symbols-outlined">code</span>
        <span>by NewDeLi</span>
      </div>
    </footer>
  );
}

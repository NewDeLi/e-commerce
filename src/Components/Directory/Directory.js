import React from "react";
import { Link } from "react-router-dom";
import Men from "../../assets/bas-peperzak-men-unsplash.jpg";
import Women from "../../assets/team-fredi-women-unsplash.jpg";
import "./Directory.scss";

export default function Directory() {
  return (
    <div className="directory">
      <div className="item" style={{ backgroundImage: `url(${Women})` }}>
        <Link to="/search/womens" className="linkButton">
          Shop women
        </Link>
      </div>
      <div className="item" style={{ backgroundImage: `url(${Men})` }}>
        <Link to="/search/mens" className="linkButton">
          Shop men
        </Link>
      </div>
    </div>
  );
}

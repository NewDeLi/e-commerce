import React from "react";
import Men from "../../assets/bas-peperzak-men-unsplash.jpg";
import Women from "../../assets/team-fredi-women-unsplash.jpg";
import "./Directory.scss";

export default function Directory() {
  return (
    <div className="directory">
      <div className="item" style={{ backgroundImage: `url(${Women})` }}>
        <a href="/search/womens" className="linkButton">
          Shop women
        </a>
      </div>
      <div className="item" style={{ backgroundImage: `url(${Men})` }}>
        <a href="/search/mens" className="linkButton">
          Shop men
        </a>
      </div>
    </div>
  );
}

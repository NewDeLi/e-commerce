import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../assets/chris-murray-YGzEX5yLKeA-unsplash.jpg";
import "./Directory.scss";

export default function Directory() {
  return (
    <div className="directory" style={{ backgroundImage: `url(${Hero})` }}>
      <div className="item">
        <h1>Where would you like to start?</h1>
        <div>
          <Link to="/search/womens" className="linkButton">
            Women
          </Link>
          <Link to="/search/mens" className="linkButton">
            Men
          </Link>
        </div>
      </div>
    </div>
  );
}

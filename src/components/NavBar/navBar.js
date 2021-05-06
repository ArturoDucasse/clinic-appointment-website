import React from "react";

import berlin from "../../images/berlin.jpg";
import shield from "../../images/fitlex.png";

import "./style.css";

const NavBar = () => {
  //Todo: Add text at the right side of the shield
  return (
    <div className="navBar_container">
      <div
        style={{
          display: "flex",
          textAlign: "left",
        }}
      >
        <img src={shield} alt="fitlex.me" />
        <p
          style={{
            lineHeight: "20px",
            padding: "10px",
          }}
        >
          Berlin testet.
          <br /> Schnell und <br /> launfend.
        </p>
      </div>
      <img src={berlin} alt="berlin" />
    </div>
  );
};

export default NavBar;

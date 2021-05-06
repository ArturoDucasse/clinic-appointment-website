import React from "react";

import berlin from "../../images/berlin.jpg";
import shield from "../../images/fitlex.png";

import "./style.css";

const NavBar = () => {
  //Todo: Add text at the right side of the shield
  return (
    <div className="navBar_container">
      <img src={shield} alt="fitlex.me" />
      <img src={berlin} alt="berlin" />
    </div>
  );
};

export default NavBar;

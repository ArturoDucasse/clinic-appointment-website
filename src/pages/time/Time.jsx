import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import { Button } from "semantic-ui-react";

const Time = () => {
  //Todo: Move this to its own file
  const ButtonTest = () => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const onClick = () => setButtonClicked(!buttonClicked);
    return (
      <div
        className={buttonClicked ? "button buttonClicked" : "button "}
        onClick={onClick}
      >
        <span>Time here</span> <span> Open slots here</span>
        <span>{">"}</span>
      </div>
    );
  };

  //Todo!: Refactor
  //Todo: Create time logic
  return (
    <>
      <h1>Wahlen sie die Uhrzeit aus:</h1>
      <div className="inlineDiv" />
      <div className="container_time">
        <div className="Morgens" style={{ width: "350px" }}>
          <h2>Morgens</h2>
          <div className="times_container">
            <ButtonTest />
            <ButtonTest />
          </div>
        </div>
        <div className="Mittags " style={{ width: "350px" }}>
          <h2>Mittags</h2>
          <div className="times_container">
            <ButtonTest />
            <ButtonTest />
          </div>
        </div>
        <div className="Abends" style={{ width: "350px" }}>
          <h2>Abends</h2>
          <div className="times_container">
            <ButtonTest />
            <ButtonTest />
          </div>
        </div>
      </div>
      <div className="_button" style={{ marginTop: "50px" }}>
        <Button positive size="large">
          <Link to="./userInfo" style={{ color: "white" }}>
            Weiter zur Registration
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Time;

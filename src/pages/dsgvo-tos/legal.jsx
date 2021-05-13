import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import { Button } from "semantic-ui-react";

const Legal = () => {
  const [checkBox, setCheckBox] = useState(false);
  const changeCheckBox = () => setCheckBox(!checkBox);

  return (
    <div className="legal_container">
      <header>
        Anmeldung - PCR-Testung
        <div className="header_line" />
      </header>

      <div className="legal_information p">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          tempore quia modi nulla. Dolor aperiam, facilis obcaecati facere odit
          rem accusantium illum placeat quo veniam amet voluptatum, provident,
          vero accusamus?
        </p>
        <p>List header</p>
        <ul>
          <li>one</li>
          <li>two</li>
        </ul>
        <p>zuer an somehting </p>
      </div>

      <div className="legal_check p">
        <input type="checkbox" className="checkBox" onClick={changeCheckBox} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>

      <div className="legal_button">
        {checkBox ? (
          <Button positive size="large">
            <Link to="/calendar" style={{ color: "white" }}>
              Positive Butt
            </Link>
          </Button>
        ) : (
          <Button disabled size="large">
            Positive Butt
          </Button>
        )}
      </div>
    </div>
  );
};

export default Legal;

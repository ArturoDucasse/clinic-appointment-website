import React from "react";

import "./style.css";
const Home = () => {
  return (
    <div className="home_container">
      <div className="header">
        Bitte wahlen sie eine der folgenden optionen aus:
      </div>
      <div className="options">
        <div className="option-1 opt">
          <img src="" alt="hola" />
          <br />
          <span> PCR-TEST</span>
          <p>Ich monchte mich fur einen schnellen PCR-Test anmelden</p>
        </div>
        <div className="option-2 opt">
          <img src="" alt="fitles" />
          <br />
          <span> ANTIGEN-TEST</span>
          <p>Ich mochte mich fur einen schnellen Antigen-Test anmelden</p>
        </div>
        <div className="option-3 opt">
          <img src="" alt="hola" />
          <br />
          <span> Symptome</span>
          <p>Welche Symptome hat Corona? </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-circle"></div>

      <p className="loader-text">
        Building the Web, one pixel at a time <span className="smirk">😏</span>
      </p>
    </div>
  );
};

export default Loader;

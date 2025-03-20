import React from "react";
import "./heading.css";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="heading-container">
      <h3 className="heading-title">{title}</h3>
      <p className="heading-subtitle">{subtitle}</p>
    </div>
  );
};

export default Heading;

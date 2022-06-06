import React from "react";
import "./TitleDisc.css";
const TitleDisc = (props) => {
  return (
    <div className="col-12 TitleDisc">
      <h2 className="title">{props.title} </h2>
      <span className="dash-line"></span>
      <h4 className="subtitle">{props.subtitle}</h4>
    </div>
  );
};

export default TitleDisc;

import React from "react";
import "./TitleDisc.css";
const TitleDisc = (props) => {
  return (
    <div class="col-12 TitleDisc">
      <h2 class="title">{props.title} </h2>
      <span class="dash-line"></span>
      <h4 class="subtitle">{props.subtitle}</h4>
    </div>
  );
};

export default TitleDisc;

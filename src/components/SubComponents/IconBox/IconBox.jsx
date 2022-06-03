import React from "react";
const IconBox = (props) => {
  return (
    <>
      <div className="box-section align-items-center d-flex">
        <div className="icon">
          <img src={props.icon} alt={props.text} />
        </div>
        <div className="text">
          <h4 className="titlttext">
            {props.text} <br />
          </h4>
        </div>
      </div>
    </>
  );
};

export default IconBox;

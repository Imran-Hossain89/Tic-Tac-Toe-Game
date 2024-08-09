import React from "react";
import "./Style.css";

const Square = (props) => {
  return (
    <div className="main-page">
      <div onClick={props.onClick} className="box">
        <p>{props.value}</p>
      </div>
    </div>
  );
};

export default Square;

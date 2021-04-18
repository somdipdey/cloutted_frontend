import React from "react";
import "./Screenshots.scss";

function Screenshots({ imgSrc }) {
  return (
    <div className="Screenshots">
      <img alt="" src={imgSrc} />
    </div>
  );
}

export default Screenshots;

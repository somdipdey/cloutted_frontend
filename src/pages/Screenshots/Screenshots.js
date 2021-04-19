import React from "react";
import "./Screenshots.scss";

function Screenshots({ imgSrc, imgCaption="" }) {
  return (
    <div className="Screenshots">
      <h2>{imgCaption}</h2>
      <img alt="" src={imgSrc} />
    </div>
  );
}

export default Screenshots;

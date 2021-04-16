import React from "react";
import "./CardHeader.scss";

function CardHeader({ headerText }) {
  return (
    <div className="CardHeader">
      <h2 className="CardHeader__title">{headerText}</h2>
    </div>
  );
}

export default CardHeader;

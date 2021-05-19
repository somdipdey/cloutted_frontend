import React from "react";
import CardBody from "./sub-component/CardBody/CardBody";
import CardHeader from "./sub-component/CardHeader/CardHeader";
import "./Card.scss";

function Card({ headerText, body, children }) {
  return (
    <div className="Card">
      <CardHeader headerText={headerText} />
      <CardBody>{body?.() || children}</CardBody>
    </div>
  );
}

export default Card;

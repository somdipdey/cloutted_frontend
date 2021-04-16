import React from "react";
import CardBody from "./sub-component/CardBody/CardBody";
import CardHeader from "./sub-component/CardHeader/CardHeader";
import "./Card.scss";

function Card({ headerText, body }) {
  return (
    <div className="Card">
      <CardHeader headerText={headerText} />
      <CardBody>{body()}</CardBody>
    </div>
  );
}

export default Card;

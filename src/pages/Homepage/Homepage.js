import React from "react";
import Card from "../../components/Card/Card";
import "./Homepage.scss";

import InsertPhotoRoundedIcon from "@material-ui/icons/InsertPhotoRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

const Communities = [
  "Music Industry",
  "Bitcoin Enthusiasts",
  "#BitCloutClubHouse",
];

const Tile = ({ name }) => (
  <div className="communities__tile">
    <InsertPhotoRoundedIcon /> {"  "} {name}
  </div>
);

const AddCommunityButton = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "spaceEvenly",
      backgroundColor: "#ffffff",
      borderRadius: "15px",
      padding: "1rem",
      marginBottom: "1rem",
      color: "#A3A3A3",
    }}
  >
    <AddRoundedIcon />
    Add Community or Hashtag
  </div>
);

const CardBody = () => (
  <div className="communities">
    <AddCommunityButton />
    {Communities.map((name) => (
      <Tile name={name} />
    ))}
  </div>
);

function Homepage() {
  return (
    <div className="Homepage">
      <div className="Homepage__leftSidebar">
        <Card headerText="Add Communities" body={CardBody} />
      </div>

      <div className="Homepage__middleArea"></div>

      <div className="Homepage__rightSidebar"></div>
    </div>
  );
}

export default Homepage;

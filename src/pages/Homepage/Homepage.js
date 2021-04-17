import React from "react";
import Card from "../../components/Card/Card";
import "./Homepage.scss";

import InsertPhotoRoundedIcon from "@material-ui/icons/InsertPhotoRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import CreatePost from "../../components/CreatePost/CreatePost";

const Communities = [
  "Music Industry",
  "Bitcoin Enthusiasts",
  "#BitCloutClubHouse",
  "NBA Lovers",
  "#BitCloutBoys",
  "#CreatorIncentives",
  "NFT Community",
];

const MyLists = [
  "My Coin Holders",
  "My Investments",
  "My Friends on Bitclout",
  "My Family on Bitclout",
  "BitClout Boys",
];

const TopCommunities = [
  "Artificial Intelligence",
  "Music",
  "Bitcoin",
  "Animal Lovers",
  "Dating",
];

const TrendingHashtags = [
  "#Bitcloutboys",
  "#Music",
  "#Cloutted",
  "#BitcloutMadeMeDoIt",
  "#SomdipDeyFanClub",
];

const Tile = ({ name }) => (
  <div className="card__tile">
    <InsertPhotoRoundedIcon /> {"  "} <a href="/">{name}</a>
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

const AddMyListsButton = () => (
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
    Create List
  </div>
);

const CommunitiesCardBody = () => (
  <div className="communities">
    <AddCommunityButton />
    {Communities.map((name) => (
      <Tile name={name} />
    ))}
  </div>
);

const MyListsCardBody = () => (
  <div className="mylists">
    <AddMyListsButton />
    {MyLists.map((name) => (
      <Tile name={name} />
    ))}
  </div>
);

const TopCommunitiesCardBody = () => (
  <div className="topcommunities">
    {TopCommunities.map((name) => (
      <Tile name={name} />
    ))}
  </div>
);

const TrendingHashtagsCardBody = () => (
  <div className="trendinghashtags">
    {TrendingHashtags.map((name) => (
      <Tile name={name} />
    ))}
  </div>
);

function Homepage() {
  return (
    <div className="Homepage">
      <div className="Homepage__leftSidebar">
        <Card headerText="" body={CommunitiesCardBody} />
        <Card headerText="" body={MyListsCardBody} />
      </div>

      <div className="Homepage__middleArea">
        <CreatePost />
      </div>

      <div className="Homepage__rightSidebar">
        <Card headerText="Top Communities" body={TopCommunitiesCardBody} />
        <Card headerText="Trending Hastags" body={TrendingHashtagsCardBody} />
      </div>
    </div>
  );
}

export default Homepage;

import React, { useState } from "react";
import Card from "../../components/Card/Card";
import "./Homepage.scss";
import gman1 from "../../assets/stub/gman1.jpg";
import gman2 from "../../assets/stub/gman2.jpg";

import AddRoundedIcon from "@material-ui/icons/AddRounded";
import CreatePost from "../../components/CreatePost/CreatePost";
import Tabs from "./sub-components/Tabs/Tabs";
import TabView from "./sub-components/TabView/TabView";
import Button from "../../components/Button/Button";

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

const genImg = () => (Math.random() * 10 > 4 ? gman1 : gman2);

const Tile = ({ name }) => (
  <div className="card__tile">
    <img className="card__tileAvatar" alt="" src={genImg()} /> {"  "}{" "}
    <a href="/">{name}</a>
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

    <Button buttonText="View All" spaceTop />
  </div>
);

const MyListsCardBody = () => (
  <div className="mylists">
    <AddMyListsButton />
    {MyLists.map((name) => (
      <Tile name={name} />
    ))}

    <Button buttonText="View All" spaceTop />
  </div>
);

const TopCommunitiesCardBody = () => (
  <div className="topcommunities">
    {TopCommunities.map((name) => (
      <Tile name={name} />
    ))}
    <Button buttonText="View All" spaceTop />
  </div>
);

const TrendingHashtagsCardBody = () => (
  <div className="trendinghashtags">
    {TrendingHashtags.map((name) => (
      <Tile name={name} />
    ))}
    <Button buttonText="View All" spaceTop />
  </div>
);

function Homepage() {
  const [tabNo, setTabNo] = useState(0);

  const setTab = (idx) => setTabNo(idx);

  return (
    <div className="Homepage">
      <div className="Homepage__leftSidebar">
        <Card body={CommunitiesCardBody} />
        <Card body={MyListsCardBody} />
      </div>

      <div className="Homepage__middleArea">
        <CreatePost />
        <Tabs tabNo={tabNo} setTab={setTab} />
        <TabView tab={tabNo} />
      </div>

      <div className="Homepage__rightSidebar">
        <Card headerText="Top Communities" body={TopCommunitiesCardBody} />
        <Card headerText="Trending Hastags" body={TrendingHashtagsCardBody} />
      </div>
    </div>
  );
}

export default Homepage;

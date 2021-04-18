import React, { useState } from "react";
import Card from "../../components/Card/Card";
import "./Homepage.scss";
//import somdipdey from "../../assets/stub/somdipdey.jpg";
//import jakeudell from "../../assets/stub/jakeudell.jpg";
import clouttedlogo from "../../assets/stub/favicon.png";

import AddRoundedIcon from "@material-ui/icons/AddRounded";
import CreatePost from "../../components/CreatePost/CreatePost";
import Tabs from "./sub-components/Tabs/Tabs";
import TabView from "./sub-components/TabView/TabView";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router";

let history;

const Communities = [
  {
    title: "Music Industry",
    onclickFunction: () => history?.push("/community"),
  },
  {
    title: "Bitcoin Enthusiasts",
    onclickFunction: () => history?.push("/community"),
  },
  {
    title: "#BitCloutClubHouse",
    onclickFunction: () => history?.push("/hastags"),
  },
  { title: "NBA Lovers", onclickFunction: () => history?.push("/community") },
  { title: "#BitCloutBoys", onclickFunction: () => history?.push("/hastags") },
  {
    title: "#CreatorIncentives",
    onclickFunction: () => history?.push("/hastags"),
  },
  {
    title: "NFT Community",
    onclickFunction: () => history?.push("/community"),
  },
];

const MyLists = [
  { title: "My Coin Holders", onclickFunction: () => alert("not implemented") },
  { title: "My Investments", onclickFunction: () => alert("not implemented") },
  {
    title: "My Friends on Bitclout",
    onclickFunction: () => alert("not implemented"),
  },
  {
    title: "My Family on Bitclout",
    onclickFunction: () => alert("not implemented"),
  },
  { title: "BitClout Boys", onclickFunction: () => alert("not implemented") },
];

const TopCommunities = [
  {
    title: "Artificial Intelligence",
    onclickFunction: () => alert("Not implemented"),
  },
  { title: "Music", onclickFunction: () => alert("Not implemented") },
  { title: "Bitcoin", onclickFunction: () => alert("Not implemented") },
  { title: "Animal Lovers", onclickFunction: () => alert("Not implemented") },
  { title: "Dating", onclickFunction: () => alert("Not implemented") },
];

const TrendingHashtags = [
  { title: "#Bitcloutboys", onclickFunction: () => alert("Not implemented") },
  { title: "#Music", onclickFunction: () => alert("Not implemented") },
  { title: "#Cloutted", onclickFunction: () => alert("Not implemented") },
  {
    title: "#BitcloutMadeMeDoIt",
    onclickFunction: () => alert("Not implemented"),
  },
  {
    title: "#SomdipDeyFanClub",
    onclickFunction: () => alert("Not implemented"),
  },
];

const genImg = () => (Math.random() * 10 > 4 ? clouttedlogo : clouttedlogo);

const Tile = ({ title, onclickFunction }) => (
  <div className="card__tile" onClick={() => onclickFunction?.()}>
    <img className="card__tileAvatar" alt="" src={genImg()} /> {"  "}{" "}
    <a>{title}</a>
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
    {Communities.map(({ title, onclickFunction }) => (
      <Tile title={title} onclickFunction={onclickFunction} />
    ))}

    <Button
      buttonText="View All"
      onClick={() => history?.push("/community")}
      spaceTop
    />
  </div>
);

const MyListsCardBody = () => (
  <div className="mylists">
    <AddMyListsButton />
    {MyLists.map(({ title, onclickFunction }) => (
      <Tile title={title} onclickFunction={onclickFunction} />
    ))}

    <Button buttonText="View All" spaceTop />
  </div>
);

const TopCommunitiesCardBody = () => (
  <div className="topcommunities">
    {TopCommunities.map(({ title, onclickFunction }) => (
      <Tile title={title} onclickFunction={onclickFunction} />
    ))}
    <Button buttonText="View All" spaceTop />
  </div>
);

const TrendingHashtagsCardBody = () => (
  <div className="trendinghashtags">
    {TrendingHashtags.map(({ title, onclickFunction }) => (
      <Tile title={title} onclickFunction={onclickFunction} />
    ))}
    <Button buttonText="View All" spaceTop />
  </div>
);

function Homepage() {
  const [tabNo, setTabNo] = useState(0);

  history = useHistory();

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

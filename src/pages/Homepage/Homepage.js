import React, { useState } from "react";
import Card from "../../components/Card/Card";
import "./Homepage.scss";
//import somdipdey from "../../assets/stub/somdipdey.jpg";
//import jakeudell from "../../assets/stub/jakeudell.jpg";
import clouttedlogo from "../../assets/stub/favicon.png";

import AddRoundedIcon from "@material-ui/icons/AddRounded";
import LockIcon from "@material-ui/icons/Lock";
import CreatePost from "../../components/CreatePost/CreatePost";
import Tabs from "./sub-components/Tabs/Tabs";
import TabView from "./sub-components/TabView/TabView";
import Button from "../../components/Button/Button";
import ReactTooltip from "react-tooltip";
import { useHistory } from "react-router";

let history;

const Communities = [
  {
    title: "Music Industry",
    onclickFunction: () => history?.push("/community"),
  },
  {
    title: "BitClout Clubhouse",
    onclickFunction: () => history?.push("/community"),
  },
  {
    title: "#Memes",
    onclickFunction: () => history?.push("/hastags"),
  },
  { title: "NBA Top Shot", onclickFunction: () => history?.push("/community") },
  {
    title: "Bitcoin Enthusiasts",
    onclickFunction: () => history?.push("/community"),
  },
  {
    title: "#CreatorIncentives",
    onclickFunction: () => history?.push("/hastags"),
  },
  {
    title: "#FemaleEmpowerment",
    onclickFunction: () => history?.push("/hastags"),
  },
  {
    title: "NFT Community",
    onclickFunction: () => history?.push("/community"),
  },
  {
    title: "#BitCloutBoys",
    onclickFunction: () => history?.push("/hastags"),
  },
  {
    title: "My Family",
    onclickFunction: () => history?.push("/community"),
  },
];

const MyLists = [
  {
    title: "Creators in my wallet",
    onclickFunction: () => history?.push("/mylists"),
  },
  {
    title: "People who invested in me ",
    onclickFunction: () => history?.push("/mylists"),
  },
  {
    title: "My Friends on Bitclout",
    onclickFunction: () => history?.push("/mylists"),
  },
  {
    title: "People I’m tracking to buy",
    onclickFunction: () => history?.push("/mylists"),
  },
];

const TopCommunities = [
  {
    title: "BitClout Meetups",
    onclickFunction: () => history?.push("/community"),
  },
  {
    title: "Animal Lovers",
    onclickFunction: () => history?.push("/community"),
  },
  {
    title: "Music Industry",
    onclickFunction: () => history?.push("/community"),
  },
  { title: "Dating", onclickFunction: () => history?.push("/community") },
  {
    title: "Women on BitClout",
    onclickFunction: () => history?.push("/community"),
  },
];

const TrendingHashtags = [
  { title: "#Cloutted", onclickFunction: () => history?.push("/hastags") },
  {
    title: "#BitCloutMadeMeDoIt",
    onclickFunction: () => history?.push("/hastags"),
  },
  { title: "#Technology", onclickFunction: () => history?.push("/hastags") },
  {
    title: "#Community",
    onclickFunction: () => history?.push("/hastags"),
  },
  {
    title: "#Memes",
    onclickFunction: () => history?.push("/hastags"),
  },
];

const genImg = () => (Math.random() * 10 > 4 ? clouttedlogo : clouttedlogo);

const Tile = ({ title, onclickFunction, imgSrc }) =>
  String({ title }.title).localeCompare("My Family") ? (
    <div className="card__tile" onClick={() => onclickFunction?.()}>
      <img className="card__tileAvatar" alt="" src={imgSrc || genImg()} />{" "}
      <a>{title}</a>
    </div>
  ) : (
    <div className="card__tile" onClick={() => onclickFunction?.()}>
      <img className="card__tileAvatar" alt="" src={imgSrc || genImg()} />{" "}
      <a>
        {title} <LockIcon fontSize="small" />
      </a>
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
    <span
      data-id="add-community-tip"
      data-tip="Add community or hashtag to conveniently follow."
    >
      <AddRoundedIcon />
    </span>
    <ReactTooltip data-id="add-community-tip" effect="float" />
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
    <span
      data-id="add-mylists-tip"
      data-tip="Curate your own feed, customize who you see, and share your lists!"
    >
      <AddRoundedIcon />
    </span>
    <ReactTooltip data-id="add-mylists-tip" effect="float" />
    Create List
  </div>
);

const CommunitiesCardBody = () => (
  <div className="communities">
    <AddCommunityButton />
    {Communities.map(({ title, onclickFunction }) => (
      <Tile
        title={title}
        onclickFunction={onclickFunction}
        imgSrc={"/faviconhead.png"}
      />
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
    <Button
      buttonText="View All"
      onClick={() => history?.push("/mylists")}
      spaceTop
    />
  </div>
);

const TopCommunitiesCardBody = () => (
  <div className="topcommunities">
    {TopCommunities.map(({ title, onclickFunction }) => (
      <Tile title={title} onclickFunction={onclickFunction} />
    ))}
    <Button
      buttonText="View All"
      onClick={() => history?.push("/community")}
      spaceTop
    />
  </div>
);

const TrendingHashtagsCardBody = () => (
  <div className="trendinghashtags">
    {TrendingHashtags.map(({ title, onclickFunction }) => (
      <Tile title={title} onclickFunction={onclickFunction} />
    ))}
    <Button
      buttonText="View All"
      onClick={() => history?.push("/hastags")}
      spaceTop
    />
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
        <Card headerText="Trending Hashtags" body={TrendingHashtagsCardBody} />
      </div>
    </div>
  );
}

export default Homepage;

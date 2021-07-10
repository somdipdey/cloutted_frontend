// packages
import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { useHistory } from "react-router";
import axios from "axios";

// assets
import clouttedlogo from "../../assets/stub/favicon.png";

// config
import { endPoints } from "../../config/api";

// components
// import CreatePost from "../../components/CreatePost/CreatePost";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Posts from "../HashTag/sub-components/Posts/Posts";
// import CircularProgress from "@material-ui/core/CircularProgress";

// icons
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import LockIcon from "@material-ui/icons/Lock";
import TrendingHashtagsCardBody from "../../components/TrendingHashtagsCardBody/TrendingHashtagsCardBody";
import Loader from "../../components/Loader/Loader";

import "./Trending.scss";
import Tabs from "../Homepage/sub-components/Tabs/Tabs";
import TrendingsCardBody from "../../components/TrendingsBody/TrendingsBody";

let history;

const Communities = [
  {
    title: "Music Industry",
    onclickFunction: () => history?.push("/"),
  },
  {
    title: "BitClout Clubhouse",
    onclickFunction: () => history?.push("/"),
  },
  {
    title: "#Memes",
    onclickFunction: () => history?.push("/"),
  },
  { title: "NBA Top Shot", onclickFunction: () => history?.push("/") },
  {
    title: "Bitcoin Enthusiasts",
    onclickFunction: () => history?.push("/"),
  },
  {
    title: "#CreatorIncentives",
    onclickFunction: () => history?.push("/"),
  },
  {
    title: "#FemaleEmpowerment",
    onclickFunction: () => history?.push("/"),
  },
  {
    title: "NFT Community",
    onclickFunction: () => history?.push("/"),
  },
  {
    title: "#BitCloutBoys",
    onclickFunction: () => history?.push("/"),
  },
  {
    title: "My Family",
    onclickFunction: () => history?.push("/"),
  },
];

const MyLists = [
  {
    title: "Creators in my wallet",
    onclickFunction: () => history?.push("/"),
  },
  {
    title: "People who invested in me ",
    onclickFunction: () => history?.push("/"),
  },
  {
    title: "My Friends on Bitclout",
    onclickFunction: () => history?.push("/"),
  },
  {
    title: "People I’m tracking to buy",
    onclickFunction: () => history?.push("/"),
  },
];

const TopCommunities = [
  {
    title: "BitClout Meetups",
    onclickFunction: () => history?.push("/"),
  },
  {
    title: "Animal Lovers",
    onclickFunction: () => history?.push("/"),
  },
  {
    title: "Music Industry",
    onclickFunction: () => history?.push("/"),
  },
  { title: "Dating", onclickFunction: () => history?.push("/community") },
  {
    title: "Women on BitClout",
    onclickFunction: () => history?.push("/"),
  },
];

const genImg = () => (Math.random() * 10 > 4 ? clouttedlogo : clouttedlogo);

const Tile = ({ title, onclickFunction, imgSrc }) =>
  String({ title }.title).localeCompare("My Family") ? (
    <div className="card__tile" onClick={() => onclickFunction?.()}>
      <img className="card__tileAvatar" alt="" src={imgSrc || genImg()} />{" "}
      {title}
    </div>
  ) : (
    <div className="card__tile" onClick={() => onclickFunction?.()}>
      <img className="card__tileAvatar" alt="" src={imgSrc || genImg()} />{" "}
      {title} <LockIcon fontSize="small" />
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
    Add Community
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
      <span
        data-id="communities-tip"
        data-tip="Join your favourite communities and hashtags you'd like to follow.  (Coming Soon)"
      >
        <Tile
          title={title}
          onclickFunction={onclickFunction}
          imgSrc={"/faviconhead.png"}
        />
      </span>
    ))}
    <Button buttonText="View All" onClick={() => history?.push("/")} spaceTop />
    <ReactTooltip data-id="communities-tip" effect="float" />
  </div>
);

const MyListsCardBody = () => (
  <div className="mylists">
    <AddMyListsButton />
    {MyLists.map(({ title, onclickFunction }) => (
      <span
        data-id="mylists-tip"
        data-tip="Add specific users to custom lists and view their related posts.  (Coming Soon)"
      >
        <Tile title={title} onclickFunction={onclickFunction} />
      </span>
    ))}
    <Button buttonText="View All" onClick={() => history?.push("/")} spaceTop />
    <ReactTooltip data-id="mylists-tip" effect="float" />
  </div>
);

const TopCommunitiesCardBody = () => (
  <div className="topcommunities">
    {TopCommunities.map(({ title, onclickFunction }) => (
      <span
        data-id="top-communities-tip"
        data-tip="View all the leading communities in the Cloutted ecosystem."
      >
        <Tile title={title} onclickFunction={onclickFunction} />
      </span>
    ))}
    <Button buttonText="View All" onClick={() => history?.push("/")} spaceTop />
    <ReactTooltip data-id="top-communities-tip" effect="float" />
  </div>
);

const PostView = ({ heading, posts, isLoading, children }) => (
  <>
    <h1 className="HashTag__pageLabel">{heading}</h1>
    {children}
    <br />
    {isLoading ? <Loader /> : <Posts posts={posts} />}
  </>
);

const tabList = [
  { title: "12 hours", value: 12 },
  { title: "24 hours", value: 24 },
  { title: "last week", value: 168 }, // hrs in a week
];

function Trending() {
  const [activeTab, setActiveTab] = useState(0);
  const [offset, setOffset] = useState(tabList[activeTab].value);
  const [posts, setPosts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const onSetTab = (tabNo) => {
    setOffset(tabList[tabNo].value);
    setActiveTab(tabNo);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(endPoints.trending, { params: { offset } })
      .then((res) => {
        const { data } = res;
        const posts = data.posts.map(({ post }) => post);
        setIsLoading(false);
        setPosts(posts);
      })
      .catch((err) => console.error(err?.response?.data?.message));
  }, [activeTab]);

  return (
    <div className="Trending">
      <div className="Trending__leftSidebar">
        <Card body={MyListsCardBody} />
        <Card body={CommunitiesCardBody} />
      </div>

      <div className="Trending__middleArea">
        <PostView heading={"Trending"} posts={posts} isLoading={isLoading}>
          <Tabs tabNo={activeTab} setTab={onSetTab} tabTitles={tabList} />
        </PostView>
      </div>

      <div className="Trending__rightSidebar">
        <TrendingsCardBody />
        <TrendingHashtagsCardBody />
      </div>
    </div>
  );
}

export default Trending;

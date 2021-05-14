// packages
import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { useHistory } from "react-router";

// styles
import "./HashTag.scss";

// assets
import clouttedlogo from "../../assets/stub/favicon.png";

// config
import { endPoints } from "../../config/api";

// components
import CreatePost from "../../components/CreatePost/CreatePost";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Posts from "./sub-components/Posts/Posts";
import axios from "axios";

// icons
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import LockIcon from "@material-ui/icons/Lock";

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

const TrendingHashtags = [
  { title: "#Cloutted", onclickFunction: () => history?.push("/") },
  {
    title: "#BitCloutMadeMeDoIt",
    onclickFunction: () => history?.push("/"),
  },
  { title: "#Technology", onclickFunction: () => history?.push("/hastags") },
  {
    title: "#Community",
    onclickFunction: () => history?.push("/"),
  },
  {
    title: "#Memes",
    onclickFunction: () => history?.push("/"),
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
      <span
        data-id="communities-tip"
        data-tip="Join your favourite communities and hashtags you'd like to follow."
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
        data-tip="Add specific users to custom lists and view their related posts."
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

const TrendingHashtagsCardBody = () => (
  <div className="trendinghashtags">
    {TrendingHashtags.map(({ title, onclickFunction }) => (
      <span
        data-id="trending-hashtags-tip"
        data-tip="View the latest and most relevant hashtags."
      >
        <Tile title={title} onclickFunction={onclickFunction} />
      </span>
    ))}
    <Button buttonText="View All" onClick={() => history?.push("/")} spaceTop />
    <ReactTooltip data-id="trending-hashtags-tip" effect="float" />
  </div>
);

function HashTag() {
  history = useHistory();

  const [posts, setPosts] = useState([]);

  const data = {
    searchTerm: "bitclout",
    // searchLimit: 1,
  };

  const options = {
    params: data,
    paramsSerializer: (params) =>
      Object.entries(Object.assign({}, params))
        .map(([key, value]) => `${key}=${value}`)
        .join("&"),
  };

  useEffect(() => {
    axios
      .get(endPoints.hashtags, options)
      .then((res) => {
        const { data } = res;
        const posts = data.hashtags.map(({ post }) => post);
        console.log(posts);
        setPosts(posts);

        // console.log(data?.message);
      })
      .catch((err) => console.error(err?.response?.data?.message));
  }, []);

  return (
    <div className="HashTag">
      <div className="HashTag__leftSidebar">
        <Card body={CommunitiesCardBody} />
        <Card body={MyListsCardBody} />
      </div>

      <div className="HashTag__middleArea">
        <CreatePost />
        <Posts posts={posts} />
      </div>

      <div className="HashTag__rightSidebar">
        <Card headerText="Top Communities" body={TopCommunitiesCardBody} />
        <Card headerText="Trending Hashtags" body={TrendingHashtagsCardBody} />
      </div>
    </div>
  );
}

export default HashTag;
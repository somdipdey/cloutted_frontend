import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Analyse.scss";

import clouttedlogo from "../../assets/stub/favicon.png";

import AddRoundedIcon from "@material-ui/icons/AddRounded";
import LockIcon from "@material-ui/icons/Lock";
import CreatePost from "../../components/CreatePost/CreatePost";
// import Tabs from "./sub-components/Tabs/Tabs";
// import TabView from "./sub-components/TabView/TabView";
import Button from "../../components/Button/Button";
import ReactTooltip from "react-tooltip";
import { useHistory } from "react-router";
import TrendingHashtagsCardBody from "../../components/TrendingHashtagsCardBody/TrendingHashtagsCardBody";
import Posts from "../HashTag/sub-components/Posts/Posts";
import axios from "axios";
import { endPoints } from "../../config/api";
import { useStateValue } from "../../data_layer/store";
import Loader from "../../components/Loader/Loader";
import AnalyseInput from "./AnalyseInput/AnalyseInput";

import WordCloud from "react-wordcloud";

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

const hashtagRegex =
  /#(\w+|(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])+)/g;

const getHashtags = (posts) =>
  Array.from(new Set(posts.map(({ Body }) => Body.match(hashtagRegex))))
    ?.flat()
    .filter(Boolean);

function Analyse() {
  // const [tabNo, setTabNo] = useState(0); // for tabs
  // const setTab = (idx) => setTabNo(idx); // for tabs

  const [posts, setPosts] = useState(null);

  const [username, setUsername] = useState(null);
  const [hashtagsFound, setHashtagsFound] = useState(null);

  const onAnalyseButtonClick = (key) => setUsername(key);

  history = useHistory();

  useEffect(() => {
    if (username)
      axios
        .get(endPoints.getPostsPerUser, {
          params: { Username: username },
        })
        .then(({ data: { posts } }) => {
          setPosts([...posts]);
          setHashtagsFound([...getHashtags(posts)]);
          // console.log(
          //   getHashtags(posts)?.map((hashtag) => ({
          //     text: hashtag,
          //     value: parseInt(10 + Math.random() * 20),
          //   }))
          // );
        })
        .catch((err) => console.log(err));
  }, [username]);

  return (
    <div className="Analyse">
      <div className="Analyse__leftSidebar">
        <Card body={CommunitiesCardBody} />
        <Card body={MyListsCardBody} />
      </div>

      <div className="Analyse__middleArea">
        <h1>Profile Analysis</h1>
        <AnalyseInput onSubmit={onAnalyseButtonClick} />
        <br />
        <h4>
          {hashtagsFound &&
            hashtagsFound?.length != 0 &&
            `${hashtagsFound?.length} hashtags found`}
          <br />
          <br />
        </h4>
        {/* <p>
          {hashtagsFound?.toString()?.replaceAll(",", ", ") ||
            (hashtagsFound && "No hashtags detected")}
        </p> */}
        {hashtagsFound && hashtagsFound?.length != 0 && (
          <div
            style={{
              height: "20vh",
              backgroundColor: "black",
              borderRadius: "25px",
              paddingBottom: "2rem",
            }}
          >
            (
            <WordCloud
              words={hashtagsFound?.map((hashtag) => ({
                text: hashtag,
                value: 12,
              }))}
              options={{
                fontFamily: "monospace",
                rotations: 0,
                enableTooltip: false,
                rotationAngles: [0, 0],
                colors: ["#98f0d8", "#FFFFFF", "#DDDDDD"],
                padding: "2rem",
              }}
            />
          </div>
        )}
        <br />

        {username ? (
          <>{posts ? <Posts posts={posts} /> : <Loader />} </>
        ) : (
          <div className="Posts__emptyMessage">
            <p className="Posts__emptySmiley"> :&#47; </p>
            <span>Enter a username to get started</span>
          </div>
        )}
      </div>

      <div className="Analyse__rightSidebar">
        <TrendingHashtagsCardBody />
        <Card headerText="Top Communities" body={TopCommunitiesCardBody} />
      </div>
    </div>
  );
}

export default Analyse;

// previous middle area comps

// <CreatePost />
// <Tabs tabNo={tabNo} setTab={setTab} />
// <TabView tab={tabNo} />

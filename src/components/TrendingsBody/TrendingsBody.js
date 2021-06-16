import { Skeleton } from "@material-ui/lab";
import { default as axios } from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { endPoints } from "../../config/api";
import Tabs from "../../pages/Homepage/sub-components/Tabs/Tabs";
import Button from "../Button/Button";
import Card from "../Card/Card";

import "./TrendingsBody.scss";

let history;

const Tile = ({ title }) => (
  <div
    style={{
      height: "35px",
      margin: "1rem",
      overflow: "hidden",
      display: title ? "flex" : "block",
      alignItems: "center",
    }}
  >
    {title ? (
      <Link to={`/hashtags/${title}`}>
        <div className="card__tile">{`#${title}`}</div>
      </Link>
    ) : (
      <Skeleton variant="rect" animation="wave" width="100%" />
    )}
  </div>
);

const tabList = [
  { title: "last 12 hours", value: 12 },
  { title: "last 24 hours", value: 24 },
  { title: "last week", value: 168 }, // hrs in a week
];

function TrendingsCardBody() {
  history = useHistory();
  const [activeTab, setActiveTab] = useState(0);
  const [offset, setOffset] = useState(tabList[0].value);

  const onSetTab = (tabNo) => {
    setOffset(tabList[tabNo].value);
    setActiveTab(tabNo);
  };

  useEffect(() => {
    setTrending([]);
    axios
      .get(endPoints.trending, { params: { resLimit: 5, offset } })
      .then((res) => {
        const { data } = res;
        const posts = data.posts.map(({ hashtag }) => hashtag);
        setTrending(Array.from(new Set(posts)));
      })
      .catch((err) => console.error(err?.response?.data?.message));
  }, [offset]);

  const [trending, setTrending] = useState(Array(5).fill(0));

  return (
    <Card headerText="Trending Hashtags">
      {/* <Tabs tabNo={activeTab} setTab={onSetTab} tabTitles={tabList} /> */}
      <select
        className="Trending__select"
        onChange={(e) => setOffset(e.target.value)}
        value={offset}
      >
        {tabList.map((el) => (
          <option value={el.value}>{el.title}</option>
        ))}
      </select>

      {trending.map((hashtag, idx) => (
        <Tile title={hashtag} key={idx} />
      ))}
      <Button buttonLink="/trending" buttonText="View Trending" spaceTop />
    </Card>
  );
}

export default TrendingsCardBody;

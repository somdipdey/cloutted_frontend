import { Skeleton } from "@material-ui/lab";
import { default as axios } from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { endPoints } from "../../config/api";
import Button from "../Button/Button";
import Card from "../Card/Card";

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

function TrendingHashtagsCardBody() {
  history = useHistory();
  const [trendingHashtags, setTrendingHashtags] = useState(Array(10).fill(0));

  useEffect(() => {
    axios
      .get(endPoints.hashtagtrends)
      .then(({ data }) => setTrendingHashtags(data.hashtagTrends))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card headerText="Top #CloutTags">
      <div className="trendinghashtags">
        {trendingHashtags.map(({ hashtag }, idx) => (
          <Tile title={hashtag} key={idx} />
        ))}
        <Button
          buttonText="View All"
          onClick={() => history?.push("/hashtags/view-all")}
          spaceTop
        />
      </div>
    </Card>
  );
}

export default TrendingHashtagsCardBody;

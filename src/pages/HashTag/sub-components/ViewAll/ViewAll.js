import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loader from "../../../../components/Loader/Loader";
import { endPoints } from "../../../../config/api";

import "./ViewAll.scss";

let history;

const ViewTile = ({ hashtag, count }) => (
  <div
    className="ViewAll__tile"
    onClick={() => history.push(`/hashtags/${hashtag}`)}
  >
    <h1 className="ViewAll__tileHashtag">{`#${hashtag}`}</h1>
    <div className="ViewAll__tileCount">{`${count} posts`} </div>
  </div>
);

function ViewAll() {
  history = useHistory();
  const [hashtrends, setHashtrends] = useState([]);
  useEffect(() => {
    axios
      .get(endPoints.hashtagtrends, { params: { searchLimit: 20 } })
      .then(({ data }) => setHashtrends(data.hashtagTrends))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ViewAll">
      {hashtrends.length != 0 ? (
        hashtrends?.map(({ hashtag, count }) => (
          <ViewTile hashtag={hashtag} count={count} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ViewAll;

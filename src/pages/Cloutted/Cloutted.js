import axios from "axios";
import React, { useEffect, useState } from "react";
import { endPoints } from "../../config/api";
import Loader from "../../components/Loader/Loader";
import Posts from "../HashTag/sub-components/Posts/Posts";

import "./Cloutted.scss";

const PostView = ({ hashtag, posts, isLoading, hashtagCounts }) => (
  <>
    <h1 className="Cloutted__pageLabel">{`#${hashtag}`}</h1>
    <br />
    <p style={{ marginTop: "-1rem" }}>
      {!isLoading && posts?.length
        ? `${hashtagCounts} posts ${hashtag && `with ${hashtag}`}`
        : null}
    </p>
    {isLoading ? <Loader /> : <Posts posts={posts} />}
  </>
);

function Cloutted() {
  const hashtag = "cloutted";

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hashtagCounts, setHashtagCounts] = useState(null);

  const data = {
    searchTerm: hashtag,
    searchLimit: 999,
  };

  const options = {
    params: data,
    // paramsSerializer: (params) =>
    //   Object.entries(Object.assign({}, params))
    //     .map(([key, value]) => `${key}=${value}`)
    //     .join("&"),
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(endPoints.hashtags, options)
      .then((res) => {
        const { data } = res;
        const posts = data.hashtags.map(({ post }) => post);
        setPosts(posts);
        setIsLoading(false);
      })
      .catch((err) => console.error(err?.response?.data?.message));

    axios
      .get(endPoints.getHashtagFrequency, { params: data })
      .then(({ data }) => setHashtagCounts(data.hashtagLength))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Cloutted">
      <div className="HashTag__leftSidebar"></div>

      <div className="HashTag__middleArea">
        <PostView
          hashtag={hashtag}
          posts={posts}
          isLoading={isLoading}
          hashtagCounts={hashtagCounts}
        />

        <p className="loading__all">Loading all #cloutted posts</p>
      </div>

      <div className="HashTag__rightSidebar"></div>
    </div>
  );
}

export default Cloutted;

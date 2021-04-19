import React from "react";
import "./HotView.scss";
import Posts from "../../sub-components/Posts/Posts";

const posts = [
  {
    id: 1,
    owner: {
      name: "cloutted",
      isVerified: true,
      value: 3_775.1,
      avatar: "/favicon.png",
    },
    post: {
      body:
        "Discover Community. Curate Feeds. Find new Trends. Socialize with friends and family. We are are #Cloutted 💪🙏🙌🏼",
      likes: 344,
      reClouts: 404,
      comments: 12,
      isLiked: true,
      postCategory: "Cloutted CoreTeam",
      postTime: "2h",
    },
  },

  {
    id: 2,
    owner: {
      name: "somdipdey",
      isVerified: true,
      value: 3_443.3,
      avatar: "/somdipdey.jpg",
    },
    post: {
      body:
        "On the Hot feed, users will be able to see the hottest clouts from BitClout from the last hour, day, and week. The most engaged posts regardless of which communities will be shown here. 🔥🔥🔥",
      likes: 115,
      reClouts: 19,
      comments: 34,
      isLiked: true,
      postCategory: "Cloutted CoreTeam",
      postTime: "1h",
    },
  },

  {
    id: 3,
    owner: {
      name: "BitClout500",
      isVerified: true,
      value: 21_775.1,
      avatar: "/bitclout500.jpg",
    },
    post: {
      body:
        "Users will be able to Follow Hashtags, Join Communities, and add Curated Lists, so their feed is always changing allowing for discovering for new friends and communities.",
      likes: 217,
      reClouts: 12,
      comments: 91,
      isLiked: true,
      postCategory: "BitClout Clubhouse",
      postTime: "3h",
    },
  },

];

function HotView() {
  return (
    <div className="HotView">
      <Posts posts={posts} />
    </div>
  );
}

export default HotView;

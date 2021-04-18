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
        "Discover Community. Curate Feeds. Find News Trends. Socialize With Freinds and family. 💪🙏🙌🏼 We Are #Cloutted",
      likes: 344,
      reClouts: 404,
      comments: 12,
      isLiked: true,
      postCategory: "Cloutted CoreTeam",
    },
  },

  {
    id: 2,
    owner: {
      name: "jakeudell",
      isVerified: true,
      value: 21_775.1,
      avatar: "/jakeudell.jpg",
    },
    post: {
      body:
        "Who's investing in creators from the #music #industry right now? 💸💸🔥🔥🔥 ",
      likes: 27,
      reClouts: 12,
      comments: 9,
      isLiked: true,
      postCategory: "Music Industry",
    },
  },

  {
    id: 3,
    owner: {
      name: "somdipdey",
      isVerified: true,
      value: 3_443.3,
      avatar: "/somdipdey.jpg",
    },
    post: {
      body:
        "Yo! Do u think Artificial Intelligence is gonna take over the society? #ArtificialIntelligence #AI ",
      likes: 15,
      reClouts: 9,
      comments: 9,
      isLiked: true,
      postCategory: "Artificial Intelligence",
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

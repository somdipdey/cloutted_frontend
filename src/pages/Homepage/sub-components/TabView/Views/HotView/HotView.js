import React from "react";
import "./HotView.scss";
import Posts from "../../sub-components/Posts/Posts";

const posts = [
  {
    id: 1,
    owner: {
      name: "jakeudell",
      isVerified: true,
      value: 21_775.1,
      avatar: "/gman1.jpg",
    },
    post: {
      body:
        "Who's investing in creators from the #music #industry right now? 💸💸🔥🔥🔥 ",
      likes: 27,
      reClouts: 2,
      comments: 12,
      isLiked: true,
      postCategory: "Music Industry",
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

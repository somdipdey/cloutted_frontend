import React from "react";
import "./TopView.scss";
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
        "Get the most liked and commented clouts (posts) directly from your community. Because we want to reach out to the influencers from our #Community 🙌🏼🙌🏼🙌🏼",
      likes: 999,
      reClouts: 2,
      comments: 12,
      isLiked: true,
      postCategory: "Cloutted CoreTeam",
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
        "We wiil be adding more features as we go along, So, buckle up for the ride! 🤩🤩🤩 #ClouttedDev #Cloutted ",
      likes: 15,
      reClouts: 2,
      comments: 9,
      isLiked: true,
      postCategory: "Artificial Intelligence",
    },
  },
];

function TopView() {
  return (
    <div className="TopView">
      <Posts posts={posts} />
    </div>
  );
}

export default TopView;

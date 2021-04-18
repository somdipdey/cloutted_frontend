import React from "react";
import "./CommunityView.scss";
import Posts from "../../sub-components/Posts/Posts";

const posts = [
  {
    id: 1,
    owner: {
      name: "cloutted",
      isVerified: true,
      value: 33_775.1,
      avatar: "/gman1.jpg",
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
      avatar: "/gman1.jpg",
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

function CommunityView() {
  return (
    <div className="TopView">
      <Posts posts={posts} />
    </div>
  );
}

export default CommunityView;

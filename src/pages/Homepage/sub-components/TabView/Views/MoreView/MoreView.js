import React from "react";
import "./MoreView.scss";
import Posts from "../../sub-components/Posts/Posts";
import Button from "../../../../../../components/Button/Button";

let history;

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
        "We will be adding new feature once we reach $10,000 of coin value. Because we want to reach out to the influencers from our #Community 🤩🤩🤩",
      likes: 799,
      reClouts: 2,
      comments: 12,
      isLiked: true,
      postCategory: "Cloutted CoreTeam",
    },
  },

];

function MoreView() {
  return (
    <div className="MoreView">
      <Posts posts={posts} />
      <Button buttonText="Buy" 
      buttonLink="https://bitclout.com/u/cloutted"
      spaceTop />
    </div>
  );
}

export default MoreView;

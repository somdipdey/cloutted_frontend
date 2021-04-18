import React from "react";
import "./NewView.scss";
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
        "Discover latest posts from your Community so that you can stay updated at all times. Because #Community matters. 💪🙏🙌🏼",
      likes: 143,
      reClouts: 4,
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
        "If U think this is dope. Just wait for what's in store for U! #ClouttedDev #Cloutted ",
      likes: 18,
      reClouts: 3,
      comments: 4,
      isLiked: true,
      postCategory: "Cloutted Devs",
    },
  },
];

function NewView() {
  return (
    <div className="NewView">
      <Posts posts={posts} />
    </div>
  );
}

export default NewView;

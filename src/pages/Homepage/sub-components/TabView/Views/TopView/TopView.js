import React from "react";
import "./TopView.scss";
import Posts from "../../sub-components/Posts/Posts";

const posts = [
  {
    id: 1,
    owner: {
      name: "topshotguru",
      isVerified: false,
      value: "3,775.1",
      avatar: "/gman1.jpg",
    },
    post: {
      body:
        "On the Top feed, users will be able to see the Top clouts from BitClout from each community for the last hour, day, and week. Here you will be able to see top trending posts for different communities and hashtags! 🙌🏼🙌🏼🙌🏼",
      likes: 991,
      reClouts: 465,
      comments: 700,
      isLiked: true,
      postCategory: "Marketing Community",
      postTime: "1d",
    },
  },

  {
    id: 2,
    owner: {
      name: "somdipdey",
      isVerified: true,
      value: "3,443.3",
      avatar: "/somdipdey.jpg",
    },
    post: {
      body:
        "On the right side you will be able to view Top Communities from Cloutted & Trending Hashtags from BitClout. 🤩🤩🤩 ",
      likes: 985,
      reClouts: 122,
      comments: 439,
      isLiked: true,
      postCategory: "Hot Topics",
      postTime: "18h",
    },
  },

  {
    id: 3,
    owner: {
      name: "cloutted",
      isVerified: true,
      value: "3,775.1",
      avatar: "/favicon.png",
    },
    post: {
      body:
        "You can search for a Community or Hashtag by using the Big Search bar on the top. If you can’t find a community page, you can apply to create a Public Community! ",
      likes: 855,
      reClouts: 243,
      comments: 909,
      isLiked: true,
      postCategory: "Cloutted CoreTeam",
      postTime: "19h",
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

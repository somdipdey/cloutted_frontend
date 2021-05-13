import React from "react";
import "./CommunityView.scss";
import Posts from "../../sub-components/Posts/Posts";

const posts = [
  {
    id: 1,
    owner: {
      name: "bitclout500",
      isVerified: true,
      value: "3,775.1",
      avatar: "/bitclout500.jpg",
    },
    post: {
      body: "Those who join communities will see the native Cloutted feed here. All the most recent posts from all the communities you joined will be shown. 🙌🏼🙌🏼🙌🏼",
      likes: 99,
      reClouts: 3,
      comments: 112,
      isLiked: true,
      postCategory: "BitClout Investments",
      postTime: "39m",
    },
  },

  {
    id: 2,
    owner: {
      name: "cloutted",
      isVerified: true,
      value: "3,443.3",
      avatar: "/favicon.png",
    },
    post: {
      body: "Cloutted Communities is your feed for all the communities you joined together. You can also click your community on the left panel to view that specific community thread as well. 🤩🤩🤩 ",
      likes: 115,
      reClouts: 21,
      comments: 93,
      isLiked: true,
      postCategory: "Cloutted CoreTeam",
      postTime: "3h",
    },
  },

  {
    id: 3,
    owner: {
      name: "somdipdey",
      isVerified: true,
      value: "3,443.3",
      avatar: "/somdipdey.jpg",
    },
    post: {
      body: "Along with Public Communities, you can start private ones to socialize with your friends and family. This will allow you to share each other's posts while also having a private messaging platform among the group.",
      likes: 153,
      reClouts: 21,
      comments: 93,
      isLiked: true,
      postCategory: "Cloutted CoreTeam",
      postTime: "3h",
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

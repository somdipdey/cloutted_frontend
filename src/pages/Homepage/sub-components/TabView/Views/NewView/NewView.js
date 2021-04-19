import React from "react";
import "./NewView.scss";
import Posts from "../../sub-components/Posts/Posts";

const posts = [
    {
        id: 1,
        owner: {
          name: "ramnewmann",
          isVerified: false,
          value: "253.3",
          avatar: "/gman1.jpg",
        },
        post: {
          body:
            "On the New Discoveries feed, users will be shown clouts from relatable/similar communities and hashtags that they have followed and joined using machine learning and AI technology. We will show you what we believe would be a great discovery for you.",
          likes: 7,
          reClouts: 0,
          comments: 1,
          isLiked: true,
          postCategory: "The Community U Didn't Know About",
          postTime: "1m",
        },
      },
    
      {
        id: 2,
        owner: {
          name: "cloutted",
          isVerified: true,
          value: "3,775.1",
          avatar: "/favicon.png",
        },
        post: {
          body:
            "Hot, New Discoveries, & Top feeds are all Clouts extracted from BitClout itself. We want to make it easier for you to interact with others and find people to connect with on the platform.",
          likes: 3,
          reClouts: 0,
          comments: 1,
          isLiked: true,
          postCategory: "Cloutted CoreTeam",
          postTime: "2m",
        },
      },
    
      {
        id: 3,
        owner: {
          name: "sumansaha",
          isVerified: true,
          value: "775.1",
          avatar: "/sumansaha.jpg",
        },
        post: {
          body:
            "Users can interact with any post on Cloutted. If you want to check out a creator’s BitClout, simply click their name. You will also have the option to Buy & Follow that creator via our platform as well. 🔥🔥🔥 ",
          likes: 1,
          reClouts: 1,
          comments: 0,
          isLiked: true,
          postCategory: "Cloutted CoreDev",
          postTime: "4m",
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

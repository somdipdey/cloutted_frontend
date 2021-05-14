import React, { useEffect, useState } from "react";
import "./Posts.scss";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@material-ui/icons/BookmarkOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import CachedOutlinedIcon from "@material-ui/icons/CachedOutlined";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import ReactTooltip from "react-tooltip";
import { useHistory } from "react-router";
import axios from "axios";
import { endPoints } from "../../../../config/api";

let history;

const Liker = ({ likes, isLiked }) => (
  <div className="Posts__postLikeWrap">
    <div className="Posts__postLikes">{likes}</div>
    <div className="Posts__postLikeBtn">
      {isLiked ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
    </div>
  </div>
);

const UserInfoRow = ({ user, postCategory }) => (
  <div className="Posts__user">
    <div className="Posts__userInfo">
      <div className="Posts__userAvatar">
        <img src={user?.ProfilePic || "/emptyPic.png"} alt="" />
      </div>
      <div className="Posts__userName">
        <p>{user?.Username || "Anonymous"}</p>
        {user?.IsVerified ? (
          <span data-id="verified-tip" data-tip="This account is verified">
            <CheckCircleRoundedIcon style={{ color: "blue" }} />
          </span>
        ) : null}
        <ReactTooltip data-id="verified-tip" effect="float" />
      </div>
      <div className="Posts__userValue">
        {`~$${user?.value || 0}`}
        <a>Buy</a>
      </div>
    </div>
    {/* <div
      className="Posts__userPostCategory"
      onClick={() => history?.push("/community")}
    >
      {postCategory}
    </div> */}
  </div>
);

const PostsRow = ({ post }) => (
  <div className="PostsRow">
    <div className="PostsRow__body">{post?.Body}</div>
    <div className="PostsRow__actions">
      <div className="PostsRow__actionsComment">
        <ChatBubbleOutlineRoundedIcon />
        {post?.Comments}
      </div>
      <div className="PostsRow__actionsReclout">
        <CachedOutlinedIcon />
        {post?.RecloutCount}
      </div>
      <div className="PostsRow__actionsShare">
        <ShareOutlinedIcon />
      </div>
      <div className="PostsRow__actionsSave">
        {post?.isSaved ? (
          <BookmarkOutlinedIcon />
        ) : (
          <BookmarkBorderOutlinedIcon />
        )}
      </div>
      <div className="PostsRow__actionsMore">
        <MoreVertOutlinedIcon />
      </div>
      <div className="PostsRow__postTime">{post?.postTime}</div>
    </div>
  </div>
);

const Post = ({ post }) => {
  const [owner, setOwner] = useState(null);

  useEffect(() => {
    const { PublicKeyBase58Check } = post;

    axios
      .get(endPoints.getUserProfile, { params: { PublicKeyBase58Check } })
      .then(({ data: { user } }) => {
        setOwner(user);
      });
  }, []);

  return (
    <div className="Posts__post">
      <Liker likes={post?.LikeCount} isLiked={post?.isLiked} />
      <div className="Posts__postMain">
        <UserInfoRow user={null} postCategory={null} />
        <PostsRow post={post} />
      </div>
    </div>
  );
};

function Posts({ posts }) {
  history = useHistory();
  return (
    <div className="Posts">
      {posts.map((post, idx) => (
        <Post key={idx} post={post} />
      ))}
    </div>
  );
}

export default Posts;

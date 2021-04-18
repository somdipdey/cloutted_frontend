import React from "react";
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
        <img src={user.avatar} alt="" />
      </div>
      <div className="Posts__userName">
        <p>{user.name}</p>
        {user.isVerified ? (
          <span data-id="verified-tip" data-tip="This account is verified">
          <CheckCircleRoundedIcon style={{ color: "blue" }} />
          </span>
        ) : null}
        <ReactTooltip data-id="verified-tip" effect="float"/>
      </div>
      <div className="Posts__userValue">
        {`~$${user.value}`}
        <a href="">Buy</a>
      </div>
    </div>
    <div className="Posts__userPostCategory" onClick = {()=> history?.push("/community")}>{postCategory}</div>
  </div>
);

const PostsRow = ({ post }) => (
  <div className="PostsRow">
    <div className="PostsRow__body">{post?.body}</div>
    <div className="PostsRow__actions">
      <div className="PostsRow__actionsComment">
        <ChatBubbleOutlineRoundedIcon />
        {post?.comments}
      </div>
      <div className="PostsRow__actionsReclout">
        <CachedOutlinedIcon />
        {post?.reClouts}
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
    </div>
  </div>
);

const Post = ({ post }) => (
  <div className="Posts__post">
    <Liker likes={post.post.likes} isLiked={post.post.isLiked} />
    <div className="Posts__postMain">
      <UserInfoRow user={post.owner} postCategory={post.post.postCategory} />
      <PostsRow post={post.post} />
    </div>
  </div>
);

function Posts({ posts }) {
  history = useHistory();
  return (
    <div className="Posts">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default Posts;

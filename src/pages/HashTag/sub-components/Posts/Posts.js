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

let history;

const Liker = ({ likes, isLiked, likeClickedHandler }) => (
  <div className="Posts__postLikeWrap">
    <div className="Posts__postLikes">{likes + (isLiked ? 1 : 0)}</div>
    <div className="Posts__postLikeBtn" onClick={likeClickedHandler}>
      {isLiked ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
    </div>
  </div>
);

const UserInfoRow = ({ user, postCategory }) => (
  <div className="Posts__user">
    <a href={`https://www.bitclout.com/u/${user?.Username}`} target="_blank">
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
        <div className="Posts__userValue" style={{ display: "none" }}>
          {`~$${user?.value || 0}`}
          <a>Buy</a>
        </div>
      </div>
    </a>
    {/* <div
      className="Posts__userPostCategory"
      onClick={() => history?.push("/community")}
    >
      {postCategory}
    </div> */}
  </div>
);

const PostsRow = ({ post }) => (
  <a
    className="PostsRow__anchor"
    href={`https://bitclout.com/posts/${post?.PostHashHex}`}
    target="_blank"
  >
    <div className="PostsRow">
      <div className="PostsRow__body">{post?.Body}</div>
      <div className="PostsRow__actions" style={{ display: "none" }}>
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
  </a>
);

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <div className="Posts__post">
      <Liker
        likes={post?.LikeCount}
        isLiked={isLiked}
        likeClickedHandler={toggleLike}
      />
      <div className="Posts__postMain">
        <UserInfoRow user={post?.owner} postCategory={null} />
        <PostsRow post={post} />
      </div>
    </div>
  );
};

function Posts({ posts }) {
  history = useHistory();

  const removeDuplicatePosts = (datas) => {
    return datas.filter((item, index, arr) => {
      const current = arr.map((item) => item.PostHashHex);
      return index === current.indexOf(item.PostHashHex);
    });
  };

  posts = removeDuplicatePosts(posts);
  return (
    <div className="Posts">
      {posts.length > 0 ? (
        posts?.map((post, idx) => <Post key={idx} post={post} />)
      ) : (
        <div className="Posts__emptyMessage">
          <p className="Posts__emptySmiley"> :&#10090; </p>
          <span>Hey, there is no posts yet</span>
        </div>
      )}
    </div>
  );
}

export default Posts;

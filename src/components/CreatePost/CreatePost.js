import React from "react";
import "./CreatePost.scss";
import InsertPhotoRoundedIcon from "@material-ui/icons/InsertPhotoRounded";

function CreatePost() {
  return (
    <div className="CreatePost">
      <div className="CreatePost__avatar">
        <InsertPhotoRoundedIcon />
      </div>
      <div className="CreatePost__input">
        What you wanna share with the community...
      </div>
      <div className="CreatePost__button">Create Post</div>
    </div>
  );
}

export default CreatePost;

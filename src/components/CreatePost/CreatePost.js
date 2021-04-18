import React from "react";
import "./CreatePost.scss";
import InsertPhotoRoundedIcon from "@material-ui/icons/InsertPhotoRounded";
import Button from "../Button/Button";

function CreatePost() {
  return (
    <div className="CreatePost">
      <div className="CreatePost__avatar">
        <InsertPhotoRoundedIcon />
      </div>
      <div className="CreatePost__input">
        What you wanna share with the community...
      </div>
      <Button buttonText="Create Post" />
    </div>
  );
}

export default CreatePost;

import React from "react";
import "./CreatePost.scss";
import InsertPhotoRoundedIcon from "@material-ui/icons/InsertPhotoRounded";
import Button from "../Button/Button";
import ReactTooltip from "react-tooltip";

function CreatePost() {
  return (
    <div className="CreatePost">
      <div className="CreatePost__avatar">
        <img alt="" src="/somdipdey.jpg" />
      </div>
      <div className="CreatePost__input">
        What you wanna share with the community...
      </div>
      <span data-id="create-post-tip" data-tip="Clout to share your thoughts with the community because your voice matters!">
      <Button buttonText="Create Post" />
      </span>
      <ReactTooltip data-id="create-post-tip" effect="float"/>
    </div>
  );
}

export default CreatePost;

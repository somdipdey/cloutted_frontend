import React from "react";
import "./ProfileDropdown.scss";

import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import ReactTooltip from "react-tooltip";

function ProfileDropdown() {
  return (
    <div className="ProfileDropdown">
      <div className="ProfileDropdown__name">
        <span data-id="prof-tip" data-tip="Your Profile">
          johndoe
        </span>
        <ReactTooltip data-id="prof-tip" effect="float"/>
      </div>

      <ExpandMoreRoundedIcon />
    </div>
  );
}

export default ProfileDropdown;

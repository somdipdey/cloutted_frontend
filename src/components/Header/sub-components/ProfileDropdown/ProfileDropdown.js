import React from "react";
import "./ProfileDropdown.scss";

import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import ReactTooltip from "react-tooltip";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { useStateValue } from "../../../../data_layer/store";

function ProfileDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [{}, dispatch] = useStateValue();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    dispatch({ type: "SET_USER", payload: null });
  };

  return (
    <div className="ProfileDropdown">
      <div
        className="ProfileDropdown__name"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        johndoe
      </div>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      <ExpandMoreRoundedIcon />
    </div>
  );
}

export default ProfileDropdown;

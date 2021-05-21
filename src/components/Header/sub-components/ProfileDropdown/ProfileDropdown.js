import React from "react";
import "./ProfileDropdown.scss";

import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { Menu, MenuItem } from "@material-ui/core";
import { useStateValue } from "../../../../data_layer/store";
import { Skeleton } from "@material-ui/lab";

function ProfileDropdown({ user }) {
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
    <>
      <div
        className="ProfileDropdown"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <div className="ProfileDropdown__avatar">
          {user?.ProfilePic ? (
            <img alt="" src={user?.ProfilePic} />
          ) : (
            <Skeleton
              variant="rect"
              height="100%"
              width="100%"
              animation="wave"
            />
          )}
        </div>
        <div className="ProfileDropdown__name">
          {user?.Username ? (
            user?.Username
          ) : (
            <Skeleton variant="rect" animation="wave" width={150} />
          )}
        </div>
        <ExpandMoreRoundedIcon />
      </div>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default ProfileDropdown;

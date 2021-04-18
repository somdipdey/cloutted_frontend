import React from "react";
import { useHistory } from "react-router";
// import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";
import ProfileDropdown from "./sub-components/ProfileDropdown/ProfileDropdown";
import SearchBar from "./sub-components/SearchBar/SearchBar";

function Header() {
  const history = useHistory();
  return (
    <div className="Header">
      <div className="Header__logo" onClick={() => history.push("/")}>
        <img className="Header__logoImg" alt="" src={logo} />
      </div>
      <SearchBar />
      <div className="Header__action" onClick={() => history.push("get-early")}>
        Get Early Access
      </div>
      <ProfileDropdown />
    </div>
  );
}

export default Header;

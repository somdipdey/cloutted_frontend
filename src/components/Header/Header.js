import React from "react";
// import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";
import ProfileDropdown from "./sub-components/ProfileDropdown/ProfileDropdown";
import SearchBar from "./sub-components/SearchBar/SearchBar";

function Header() {
  return (
    <div className="Header">
      <div className="Header__logo">
        <img className="Header__logoImg" alt="" src={logo} />
      </div>
      <SearchBar />
      <div className="Header__action">Get Early Access</div>
      <ProfileDropdown />
    </div>
  );
}

export default Header;

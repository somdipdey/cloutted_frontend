import React from "react";
// import { Link } from "react-router-dom";
import "./Header.scss";
import ProfileDropdown from "./sub-components/ProfileDropdown/ProfileDropdown";
import SearchBar from "./sub-components/SearchBar/SearchBar";

function Header() {
  return (
    <div className="Header">
      <div className="Header__logo">🤖 Cloutted </div>
      <SearchBar />
      <div className="Header__action">Get Early access</div>
      <ProfileDropdown />
    </div>
  );
}

export default Header;

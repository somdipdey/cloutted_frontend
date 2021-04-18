import React from "react";
import "./SearchBar.scss";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ReactTooltip from "react-tooltip";

function SearchBar() {
  return (
    <div className="SearchBar">
      <span data-id="header-search-tip" data-tip="Search for communities and hashtags">
      <SearchRoundedIcon />
      </span>
      <ReactTooltip data-id="header-search-tip" />
      <input
        className="SearchBar__input"
        type="text"
        placeholder="Discover Communities (i.e. #cloutboys)"
      />
    </div>
  );
}

export default SearchBar;

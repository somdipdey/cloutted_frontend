import React from "react";
import "./SearchBar.scss";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

function SearchBar() {
  return (
    <div className="SearchBar">
      <SearchRoundedIcon />
      <input
        className="SearchBar__input"
        type="text"
        placeholder="Discover Communities (i.e. #cloutboys)"
      />
    </div>
  );
}

export default SearchBar;

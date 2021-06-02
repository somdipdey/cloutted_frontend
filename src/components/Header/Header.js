import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
// import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { endPoints } from "../../config/api";
import { useStateValue } from "../../data_layer/store";
import "./Header.scss";
import ProfileDropdown from "./sub-components/ProfileDropdown/ProfileDropdown";
import SearchBar from "./sub-components/SearchBar/SearchBar";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  useEffect(() => {
    const { PublicKeyBase58Check } = user || {};
    axios
      .get(endPoints.getUserProfile, {
        params: { PublicKeyBase58Check },
      })
      .then(({ data: { user } }) => {
        const {
          PublicKeyBase58Check,
          Username,
          Description,
          ProfilePic,
          IsVerified,
        } = user;

        const authUser = {
          PublicKeyBase58Check,
          Username,
          Description,
          ProfilePic,
          IsVerified,
        };

        dispatch({ type: "SET_USER", payload: authUser });
      });
  }, []);

  return (
    <div className="Header">
      <div className="Header__logo" onClick={() => history.push("/")}>
        <img className="Header__logoImg" alt="" src={logo} />
      </div>
      <SearchBar />
      <div className="Header__action" onClick={() => history.push("/")}>
        Home
      </div>
      <div
        className="Header__action"
        onClick={() => history.push("/what-is-cloutted")}
      >
        What is cloutted?
      </div>
      <div className="Header__action" onClick={() => history.push("/analyse")}>
        Analyse #CloutTags
      </div>
      <ProfileDropdown user={user} />
    </div>
  );
}

export default Header;

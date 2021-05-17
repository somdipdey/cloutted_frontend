import React, { useState } from "react";
import launchLoginWindow from "./auth_scripts/login";
import "./Auth.scss";
import launchLogoutWindow from "./auth_scripts/logout";
import { useStateValue } from "../../../data_layer/store";
import Button from "../../../components/Button/Button";

function Auth() {
  const [{}, dispatch] = useStateValue();
  const [PublicKeyBase58Check, setPublicKeyBase58Check] = useState(null);

  const setKey = (PublicKeyBase58Check) => {
    setPublicKeyBase58Check(PublicKeyBase58Check);
    dispatch({ type: "SET_USER", payload: { PublicKeyBase58Check } });
  };

  return (
    <div className="Auth">
      <h1>Welcome to #cloutted</h1>
      <Button
        spaceTop
        buttonText=" Login "
        onClick={() => launchLoginWindow(setKey)}
      />
      {/* <a onClick={() => launchLogoutWindow(publicKey, setPublicKey)}>Logout</a> */}
    </div>
  );
}

export default Auth;
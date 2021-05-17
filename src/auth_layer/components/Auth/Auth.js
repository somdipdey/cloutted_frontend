import React, { useEffect, useState } from "react";
import launchLoginWindow from "./auth_scripts/login";
import "./Auth.scss";
import launchLogoutWindow from "./auth_scripts/logout";
import { useStateValue } from "../../../data_layer/store";
import Button from "../../../components/Button/Button";

function Auth() {
  const [{}, dispatch] = useStateValue();
  const [publicKey, setPublicKey] = useState(null);

  useEffect(() => {
    console.log("rinning");
  }, [publicKey]);

  const setKey = (publicKey) => {
    console.log("doing it");
    setPublicKey(publicKey);
    dispatch({ type: "SET_USER", payload: publicKey });
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

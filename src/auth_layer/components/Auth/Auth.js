import React, { useState } from "react";
import launchLoginWindow from "./auth_scripts/login";
import "./Auth.scss";
import { useStateValue } from "../../../data_layer/store";
import Button from "../../../components/Button/Button";
import { Modal, Paper } from "@material-ui/core";

function Auth() {
  const [{}, dispatch] = useStateValue();
  const [PublicKeyBase58Check, setPublicKeyBase58Check] = useState(null);

  const [redirectUser, setRedirectUser] = useState(false);

  const setKey = (PublicKeyBase58Check) => {
    setPublicKeyBase58Check(PublicKeyBase58Check);
    dispatch({ type: "SET_USER", payload: { PublicKeyBase58Check } });
  };

  return (
    <div className="Auth">
      <div className="Auth__welcome">
        <h1 className="Auth__welcomeText">Welcome to</h1>
        <div className="Auth__welcomeLogo">
          <img src="/logo.png" alt="" />
        </div>
      </div>

      <Button
        spaceTop
        buttonText="Login with Bitclout"
        onClick={() => launchLoginWindow(setKey, setRedirectUser)}
      />

      <Modal open={redirectUser} onClose={() => setRedirectUser(false)}>
        <div
          style={{
            width: "400px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <Paper>
            <div
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>
                Sorry, You are no allowed to access this closed beta. Consider
                signing up.
              </p>
              <a href="https://www.cloutted.com/" target="_blank">
                <Button
                  spaceTop
                  buttonText="Sign Up!"
                  onClick={() => setRedirectUser(false)}
                />
              </a>
            </div>
          </Paper>
        </div>
      </Modal>
      {/* <a onClick={() => launchLogoutWindow(publicKey, setPublicKey)}>Logout</a> */}
    </div>
  );
}

export default Auth;

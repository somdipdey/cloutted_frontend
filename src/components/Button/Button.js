import React from "react";

import "./Button.scss";

function Button({ buttonText, onClick, buttonLink = "", spaceTop }) {
  return (
    <div
      className={`Button${spaceTop ? ` Button--withMarginTop` : ""}`}
      onClick={() => onClick?.()}
    >
      {buttonLink ? (
        <a href={buttonLink}>{buttonText || "Click Me"} </a>
      ) : (
        buttonText || "Click Me"
      )}
    </div>
  );
}

export default Button;

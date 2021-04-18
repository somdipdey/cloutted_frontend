import React from "react";

import "./Button.scss";

function Button({ buttonText, onClick, spaceTop }) {
  return (
    <div
      className={`Button${spaceTop ? ` Button--withMarginTop` : ""}`}
      onClick={() => onClick?.()}
    >
      {buttonText || "Click Me"}
    </div>
  );
}

export default Button;

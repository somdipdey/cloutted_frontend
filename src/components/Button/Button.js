import React from "react";

import "./Button.scss";

function Button({ buttonText, onClickFunction, spaceTop }) {
  return (
    <div
      className={`Button${spaceTop ? ` Button--withMarginTop` : ""}`}
      onClick={() => onClickFunction?.()}
    >
      {buttonText || "Click Me"}
    </div>
  );
}

export default Button;

import { CircularProgress } from "@material-ui/core";
import React from "react";

function Loader() {
  return (
    <div
      style={{
        height: "50%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
}

export default Loader;

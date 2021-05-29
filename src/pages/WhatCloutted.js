import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

function WhatCloutted() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => setloading(false), 1000);
  }, []);

  return (
    <div
      style={{
        height: "89vh",
        width: "100vw",
        overflow: "hidden",
        paddingRight: "-1rem",
        position: "relative",
      }}
    >
      {loading && (
        <div style={{ position: "absolute", top: "40vh", left: "49vw" }}>
          <Loader />
        </div>
      )}
      <iframe
        width="100%"
        height="100%"
        src="https://www.cloutted.com/home"
        style={{
          height: "105%",
          width: "100%",
          marginRight: "-1rem",
        }}
      ></iframe>
    </div>
  );
}

export default WhatCloutted;

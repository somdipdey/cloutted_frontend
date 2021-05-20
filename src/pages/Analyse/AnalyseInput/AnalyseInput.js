import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import Button from "../../../components/Button/Button";

import "./AnalyseInput.scss";

function AnalyseInput({ onSubmit }) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="AnalyseInput">
      <div className="AnalyseInput__inputWrapper">
        <TextField
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          variant="outlined"
          style={{ width: "400px" }}
          placeholder="Enter user code"
        />
      </div>
      <Button buttonText="Analyse" onClick={() => onSubmit?.(inputText)} />
    </div>
  );
}

export default AnalyseInput;

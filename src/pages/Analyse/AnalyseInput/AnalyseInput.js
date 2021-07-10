import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import { endPoints } from "../../../config/api";

import "./AnalyseInput.scss";

function AnalyseInput({ onSubmit }) {
  const [inputText, setInputText] = useState("");
  const [open, setOpen] = useState(false);
  const [isLoadingFromApi, setIsLoadingFromApi] = useState(true);
  const [options, setOptions] = useState([]);
  const loading = (open && options.length === 0) || isLoadingFromApi;

  const populateOptions = async (newVal = "") => {
    setIsLoadingFromApi(true);
    const response = await axios.get(endPoints.users, {
      params: { Username: newVal },
    });

    const {
      data: { users },
    } = response;

    if (users.length === 0) {
      setIsLoadingFromApi(false);
    }
    setOptions(users);
    setIsLoadingFromApi(false);
  };

  useEffect(() => {
    if (!loading) {
      return "";
    }

    populateOptions();
  }, [open]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return (
    <div className="AnalyseInput">
      <div className="AnalyseInput__inputWrapper">
        <Autocomplete
          id="username-search"
          onChange={(e, newValue) => {
            e?.preventDefault();
            setInputText(newValue?.Username || "");
          }}
          style={{ width: "100%" }}
          renderOption={(option) => option?.Username}
          freeSolo
          clearOnEscape
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          inputValue={inputText}
          onInputChange={(e, newInputValue) => {
            e?.preventDefault();
            setInputText(newInputValue);
            populateOptions(newInputValue);
          }}
          options={options}
          getOptionLabel={(option) => option?.Username}
          loading={loading}
          loadingText={
            !isLoadingFromApi && options?.length === 0
              ? "No matching results"
              : inputText.length > 1
              ? "Loading users..."
              : "Start typing..."
          }
          renderInput={(params) => (
            <TextField
              {...params}
              value={inputText}
              variant="outlined"
              style={{ width: "400px" }}
              placeholder="Enter a username to get started"
            />
          )}
        />
      </div>
      <Button buttonText="Analyze" onClick={() => onSubmit?.(inputText)} />
    </div>
  );
}

export default AnalyseInput;

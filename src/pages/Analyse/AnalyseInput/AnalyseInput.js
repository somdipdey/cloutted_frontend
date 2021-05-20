import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "../../../components/Button/Button";
import { endPoints } from "../../../config/api";

import "./AnalyseInput.scss";

function AnalyseInput({ onSubmit }) {
  const [inputText, setInputText] = useState("");
  const [open, setOpen] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [isLoadingFromApi, setIsLoadingFromApi] = useState(true);
  const [options, setOptions] = useState([]);
  const loading = (open && options.length === 0) || isLoadingFromApi;

  const history = useHistory();
  const populateOptions = async (newVal = "") => {
    setIsLoadingFromApi(true);
    const response = await axios.get(endPoints.hashtagtrends, {
      params: { searchKey: newVal },
    });

    const {
      data: { hashtagTrends: hashtags },
    } = response;

    if (hashtags.length === 0) {
      setIsLoadingFromApi(false);
    }
    setOptions(hashtags);
    setIsLoadingFromApi(false);
  };

  useEffect(() => {
    if (!loading) {
      return "";
    }

    populateOptions();

    // if (firstLoad) {
    //   setFirstLoad(false);
    // }
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
            console.log(newValue);
          }}
          style={{ width: "100%" }}
          renderOption={(option) => option}
          freeSolo
          clearOnBlur
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
          options={["somdipdey", "sumansaha"]}
          loading={loading}
          loadingText={
            !isLoadingFromApi && !firstLoad && options.length === 0
              ? "No matching results"
              : "Loading users..."
          }
          renderInput={(params) => (
            <TextField
              {...params}
              value={inputText}
              variant="outlined"
              style={{ width: "400px" }}
              placeholder="Enter user code"
            />
          )}
        />
      </div>
      <Button buttonText="Analyse" onClick={() => console.log?.(inputText)} />
    </div>
  );
}

export default AnalyseInput;

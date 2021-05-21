import React, { useEffect, useState } from "react";
import "./SearchBar.scss";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ReactTooltip from "react-tooltip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { endPoints } from "../../../../config/api";
import { useHistory } from "react-router";

function SearchBar() {
  const [open, setOpen] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [isLoadingFromApi, setIsLoadingFromApi] = useState(true);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const loading = (open && options.length === 0) || isLoadingFromApi;

  const history = useHistory();
  const populateOptions = async (newVal = "") => {
    setIsLoadingFromApi(true);
    const response = await axios.get(endPoints.hashtagtrends, {
      params: { searchTerm: newVal },
    });

    const {
      data: { hashtagTrends: hashtags },
    } = response;

    if (hashtags.length === 0) {
      console.log("setFalse");
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
    <div className="SearchBar">
      <span
        data-id="header-search-tip"
        data-tip="Search for communities and hashtags"
      >
        <SearchRoundedIcon />
      </span>
      <ReactTooltip data-id="header-search-tip" />

      <Autocomplete
        id="hashtag-search"
        onChange={(e, newValue) => {
          setInputValue("");
          e?.preventDefault();
          history.push(`/hashtags/${newValue?.hashtag?.trim() || ""}`);
        }}
        style={{ width: "100%" }}
        renderOption={(option) => option?.hashtag}
        freeSolo
        clearOnBlur
        clearOnEscape
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        getOptionSelected={(option, value) =>
          option?.hashtag === value?.hashtag
        }
        inputValue={inputValue}
        onInputChange={(e, newInputValue) => {
          e?.preventDefault();
          setInputValue(newInputValue);
          populateOptions(newInputValue);
        }}
        getOptionLabel={(option) => option?.hashtag}
        options={options}
        loading={loading}
        loadingText={
          !isLoadingFromApi && !firstLoad && options.length === 0
            ? "No matching results"
            : "Loading hashtags..."
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            // placeholder="Discover Communities (i.e. #cloutboys)"
            placeholder="Discover Hashtags (i.e. #cloutboys)"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </div>
  );
}

export default SearchBar;

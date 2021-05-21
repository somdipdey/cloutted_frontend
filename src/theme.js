import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#000000",
    },
  },
});

const MuiAutocomplete = {
  root: {
    backgroundColor: "transparant",
    borderRadius: "15px",
  },
  popper: {
    borderRadius: "15px",
    marginTop: "18px",
  },
  paper: {
    borderRadius: "15px",
  },
};

const MuiOutlinedInput = {
  root: {
    borderRadius: "15px",
    paddingRight: "5px !importtant",
    "&:hover $notchedOutline": {
      borderColor: "transparant",
    },

    "&$focused $notchedOutline": {
      borderColor: "transparant",
    },
  },
  notchedOutline: {
    borderRadius: "15px",
    borderColor: "transparent",
  },
};

// const MuiPopover = {
//   paper: {
//     borderRadius: "15px",
//   },
// };

// const MuiSelect = {
//   root: {
//     backgroundColor: grey[100],
//   },
//   outlined: {
//     borderRadius: "15px",
//   },
//   select: {
//     borderRadius: "15px",
//   },
// };

theme.props = {};

theme.overrides = {
  MuiAutocomplete,
  // MuiSelect,
  MuiOutlinedInput,
  // MuiPopover,
};

export default theme;

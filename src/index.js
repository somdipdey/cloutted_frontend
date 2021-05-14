import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./data_layer/store";
import reportWebVitals from "./reportWebVitals";
import "./Scrollbar.scss";
import reducer, { initialState } from "./data_layer/reducer";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

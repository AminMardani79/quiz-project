import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// react redux
import { Provider } from "react-redux";
import store from "./redux/store";
// router dom
import { BrowserRouter } from "react-router-dom";
// styles
import { ThemeProvider } from "@mui/material";
import { globalTheme } from "./mui/theme";
import "./assets/css/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={globalTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CatchProvider } from "./context/CatchContext";

ReactDOM.render(
  <React.StrictMode>
    <CatchProvider>
      <App />
    </CatchProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

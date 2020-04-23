import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CatchProvider } from "./context/CatchContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <CatchProvider>
        <App />
      </CatchProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

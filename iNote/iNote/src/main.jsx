import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./MainApp.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import "@fontsource/roboto";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>
);

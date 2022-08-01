import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./views/home";
import Inventory from "./views/inventory";
import Profile from "./views/profile";
import { DataProvider } from "./context/DataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);

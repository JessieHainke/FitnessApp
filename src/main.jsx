import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Dash from "./App/dash";
import Nav from "./Components/navbar";
import Browse from "./App/browse";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Dash />
    
  </React.StrictMode>
);

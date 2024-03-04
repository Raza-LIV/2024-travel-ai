import React from "react";
import ReactDOM from "react-dom/client";
import { RouterComponent } from "./routes/router-component";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>
);

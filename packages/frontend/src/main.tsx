import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterComponent } from "./routes/router-component.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>
);
